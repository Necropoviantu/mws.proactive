<?php

use Bitrix\Main\Localization\Loc;

Loc::loadLanguageFile(__FILE__);

class mws_proactive extends CModule
{
    public $MODULE_ID = "mws.proactive";
    public $errors = "";
    static $events = array(
        //TODO массив для подключения реста
        array(
            "FROM_MODULE" => "rest",
            "FROM_EVENT" => "OnRestServiceBuildDescription",
            "TO_CLASS" => "MwsProactiveRest",
            "TO_FUNCTION" => "OnRestServiceBuildDescription",
            "VERSION" => "1"
        ),
        //TODO  массив подключение реста для втройки
        array(
            "FROM_MODULE" => "crm",
            "FROM_EVENT" => "onEntityDetailsTabsInitialized",
            "TO_CLASS" => "tabAdder",
            "TO_FUNCTION" => "addTab",
            "VESRION" => "2"

        )
    );
    //TODO конструктор модуля
    public function __construct()
    {
        $this->MODULE_GROUP_RIGHTS = "N";
        $this->MODULE_NAME = Loc::getMessage("MWS_PROACTIVE_MODULE_NAME");
        $this->MODULE_DESCRIPTION = Loc::getMessage("MWS_PROACTIVE_MODULE_DESCRIPTION");
        $this->PARTNER_NAME = Loc::getMessage("MWS_PROACTIVE_MODULE_PARTNER_NAME");
        $this->PARTNER_URI = Loc::getMessage("MWS_PROACTIVE_MODULE_PARTNER_URI");

        $arModuleVersion = array();
        include __DIR__ . "/version.php";
        if(is_array($arModuleVersion) && array_key_exists("VERSION", $arModuleVersion)){
            $this->MODULE_VERSION = $arModuleVersion["VERSION"];
            $this->MODULE_VERSION_DATE = $arModuleVersion["VERSION_DATE"];
        }
    }
    //TODO  Запуск установки
    public function DoInstall()
    {
        $this->InstallDB();
        $this->InstallEvents();
        $this->installFiles();
        \Bitrix\Main\ModuleManager::registerModule($this->MODULE_ID);
        return true;
    }
    //TODO Создание таблиц в БД
    public function InstallDB()
    {
        global $DB, $APPLICATION;
        $this->errors = $DB->RunSQLBatch(__DIR__ . '/db/install.sql');
        if (is_array($this->errors)) {
            $APPLICATION->ThrowException(implode('<br />', $this->errors));
            return false;
        }
        return true;

    }
    //TODO Коприрование файлов и папок по нужным Директориям
    public function installFiles()
    {
        CopyDirFiles(
            __DIR__ . "/local/admin/",
            \Bitrix\Main\Application::getDocumentRoot() . "/bitrix/admin/",
            true,
            true
        );
        CopyDirFiles(
            __DIR__ . "/local/proactive",
            \Bitrix\Main\Application::getDocumentRoot() . "/proactive",
            true,
            true
        );

        CopyDirFiles(
            __DIR__ . "/local/mws.proactive.endpoint",
            \Bitrix\Main\Application::getDocumentRoot() . "/local/components/mws.proactive.endpoint/",
            true,
            true
        );
//        CopyDirFiles(
//            __DIR__ . "/local/apps",
//            \Bitrix\Main\Application::getDocumentRoot() . "/local/apps/",
//            true,
//            true
//        );

        return true;

    }
    //TODO функция регистрауии евентов подключаем рест
    public function InstallEvents()
    {
        $eventManager = \Bitrix\Main\EventManager::getInstance();
        foreach (static::$events as $event)
            switch ($event["VERSION"]) {
                case "2":
                    $eventManager->registerEventHandler($event["FROM_MODULE"], $event["FROM_EVENT"], $this->MODULE_ID, $event["TO_CLASS"], $event["TO_FUNCTION"]);
                    break;
                case "1":
                default:
                    $eventManager->registerEventHandlerCompatible($event["FROM_MODULE"], $event["FROM_EVENT"], $this->MODULE_ID, $event["TO_CLASS"], $event["TO_FUNCTION"]);
                    break;
            }
        return true;
    }




    //TODO функция деинсталятор
    public function DoUninstall()
    {
        global $APPLICATION, $USER, $DB, $step;
        $step = intval($step);
        if ($step < 2) {
            $APPLICATION->IncludeAdminFile(Loc::getMessage("MWS_1C_MODULE_UNINSTALL_TITLE", array("#MODULE_NAME#" => $this->MODULE_NAME)), __DIR__ . "/unstep1.php");
        } elseif ($step === 2) {
            if (!array_key_exists('savedata', $_REQUEST) || $_REQUEST['savedata'] != 'Y'){
                $this->UnInstallDB();
            }
            // удаление файлов модуля и евентов
            $this->UnInstallEvents();
//            $this->UnInstallFiles();

            \Bitrix\Main\ModuleManager::unRegisterModule($this->MODULE_ID);
//            \Bitrix\Main\Config\Option::delete("mws.proactive"); удаление хранения выпушенного токена
            return true;
        }



        return true;
    }

    //TODO удаление таблиц в базе
    public function UnInstallDB()
    {
        /** @var \CMain $APPLICATION */
        /** @var \CDatabase $DB */
        global $DB, $APPLICATION;
        $this->errors = $DB->RunSQLBatch(__DIR__ . '/db/uninstall.sql');
        if (is_array($this->errors)) {
            throw new \Exception(implode('<br />', $this->errors));
            return false;
        }


        return true;
    }
    //TODO удаление евентов
    public function UnInstallEvents()
    {
        $eventManager = \Bitrix\Main\EventManager::getInstance();
        foreach (static::$events as $event)
            $eventManager->unRegisterEventHandler($event["FROM_MODULE"], $event["FROM_EVENT"], $this->MODULE_ID, $event["TO_CLASS"], $event["TO_FUNCTION"]);
        return true;
    }

}