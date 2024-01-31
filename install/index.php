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
//        CopyDirFiles(
//            __DIR__ . "/local/admin/",
//            \Bitrix\Main\Application::getDocumentRoot() . "/bitrix/admin/",
//            true,
//            true
//        );
        CopyDirFiles(
            __DIR__ . "/local/proactive",
            \Bitrix\Main\Application::getDocumentRoot() . "/proactive",
            true,
            true
        );
        CopyDirFiles(
            __DIR__ . "/local/mws.proactive.endpoint",
            \Bitrix\Main\Application::getDocumentRoot() . "/local/components/mws.proactive.endpoints/",
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



}