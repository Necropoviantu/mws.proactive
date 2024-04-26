<?php

use Bitrix\Crm\CompanyTable;
use Bitrix\Crm\Service;
use Bitrix\Main\SystemException;
use Mywebstor\Proactive\AbonentStatusTable;
use Mywebstor\Proactive\AbonentTable;
use Mywebstor\Proactive\IpCheckTable;
use Mywebstor\Proactive\MetricsTable;
use Mywebstor\Proactive\MetricsUnitTable;
use Mywebstor\Proactive\SettingsTable;

class MwsProactiveRest extends IRestService
{
    public static function OnRestServiceBuildDescription()
    {
        return array(
            "mwsproactiverest" => array(
                //TODO Работа с токеном
                'mwsproactiverest.setToken' => array(__CLASS__, 'setToken'),
                'mwsproactiverest.getToken' => array(__CLASS__, 'getToken'),
                //TODO методы реста для фронта управление метриками
                'mwsproactiverest.metric.add' => array(__CLASS__, "metricAdd"),
                'mwsproactiverest.metric.update' => array(__CLASS__, "metricUpdate"),
                'mwsproactiverest.metric.delete' => array(__CLASS__, "metricDelete"),
                'mwsproactiverest.metric.getByID' => array(__CLASS__, "metricGetByID"),
                'mwsproactiverest.metric.getList' => array(__CLASS__, "metricGetList"),
                //TODO методы реста для фронта заполнения метрик
                'mwsproactiverest.metricunit.add' => array(__CLASS__, 'metricUnitAdd'),
                'mwsproactiverest.metricunit.update' => array(__CLASS__, 'metricUnitUpdate'),
                'mwsproactiverest.metricunit.delete' => array(__CLASS__, 'metricUnitDelete'),
                'mwsproactiverest.metricunit.getByID' => array(__CLASS__, 'metricUnitGetByID'),
                'mwsproactiverest.metricunit.getList' => array(__CLASS__, 'metricUnitGetList'),
                //TODO Метод проверки таблиц в базе данных
                'mwsproactiverest.checktable' => array(__CLASS__, 'checkTableOnBase'),
                //TODO Статусы в таблицe Абонент
                'mwsproactiverest.abonentStatus.add' => array(__CLASS__, 'abonentStatusAdd'),
                'mwsproactiverest.abonentStatus.update' => array(__CLASS__, 'abonentStatusUpdate'),
                'mwsproactiverest.abonentStatus.getList' => array(__CLASS__, 'abonentStatusGetList'),
                'mwsproactiverest.abonentStatus.delete' => array(__CLASS__, 'abonentStatusDelete'),
                //TODO Список Смарт процессов
                "mwsproactiverest.smart.getSmarts" => array(__CLASS__, 'getListSmart'),
                "mwsproactiverest.getUserFields" => array(__CLASS__, 'getUserFields'),
                //TODO Списки
                "mwsproactiverest.getLists" => array(__CLASS__, 'getLists'),
                "mwsproactiverest.list.getElements" => array(__CLASS__, 'getListElement'),
                //TODO Настройки CRUD
                "mwsproactiverest.setting.add" => array(__CLASS__, 'settingAdd'),
                "mwsproactiverest.setting.update" => array(__CLASS__, 'settingUpdate'),
                "mwsproactiverest.setting.delete" => array(__CLASS__, 'settingDelete'),
                "mwsproactiverest.setting.getList" => array(__CLASS__, 'settingGetList'),
                //TODO UI проактив
                "mwsproactive.ui.proactiveTableUi" => array(__CLASS__, "getUiProactive"),
                "mwsproactive.ui.proactiveSetDeal" => array(__CLASS__, 'proactiveSetDeal'),

                'mwsproactiverest.abonent.update' => array(__CLASS__, 'abonentUpdate'),
                "mwsproactiverest.ipcheck.getList" => array(__CLASS__, 'ipGetList'),
                "mwsproactiverest.ipcheck.ipReleases" => array(__CLASS__, 'ipReleases')
            ),

        );
    }


    //TODO  Проверка наличия таблиц  подсчет размера
    public static function checkTableOnBase($query, $nav, \CRestServer $server)
    {

        $arr = $query['table'];
        $connection = \Bitrix\Main\Application::getConnection();

        $base = $connection->getDatabase();
        $result = [];
        foreach ($arr as $elem) {
            $resUp = $connection->query('
	SELECT
    table_name AS `table`,
    round(((data_length + index_length) / 1024 / 1024), 2) `size`
	FROM information_schema.TABLES
	WHERE table_schema = "' . $base . '"
    AND table_name = "' . $elem['name'] . '"
	');
            $res = $resUp->Fetch();

            if ($res) {
                $elem['status'] = 1;
                $elem['size'] = $res['size'];
            }
            $result[] = $elem;
        }

        return $result;
    }

    //TODO получение токена
    public static function getToken($query, $nav, \CRestServer $server)
    {
        $token = unserialize(COption::GetOptionString("mws.proactive", "mws_proactive_integration_token", "a:0:{}"));
        return $token;
    }

    //TODO установка нового токена
    public static function setToken($query, $nav, \CRestServer $server)
    {
        $token = COption::SetOptionString("mws.proactive", "mws_proactive_integration_token", serialize($query['genToken']));
        return $token;
    }

    //TODO добавление метрики
    public static function metricAdd($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');

        $fields = [
            "NAME" => $query['metric']['NAME'],
            "METRIC_ASUO" => $query['metric']['METRIC_ASUO'],
            "MEANING" => $query['metric']['MEANING'],
            "STANDART" => $query['metric']['STANDART'],
            "DESCRIPTION" => $query['metric']['DESCRIPTION'],
            "TESTS" => $query['metric']['TESTS'],
            "ALGORITM" => $query['metric']['ALGORITM'],
        ];

        $add = MetricsTable::add($fields);

        try {
            if ($add->isSuccess()) {
                return $add->getID();
            }
        } catch (\SystemException $exception) {
            return $exception->getMessage();
        }
    }

    //TODO получение метрик по фильтру
    public static function metricGetList($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');

        $entity = [
            'order' => $query['order'] ?: [],
            'filter' => $query['filter'] ?: [],
            'select' => $query['select'] ?: []
        ];

        $add = MetricsTable::getList($entity);

        try {
            return $add->fetchAll();
        } catch (\SystemException $exception) {
            return $exception->getMessage();
        }
    }

    //TODO обновление метрики
    public static function metricUpdate($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');
        $upd = MetricsTable::update($query['ID'], $query['fields']);
        try {
            if ($upd->isSuccess()) {
                return $upd->isSuccess();
            }
        } catch (\SystemException $exception) {
            return $exception->getMessage();
        }
    }

    //TODO удаление метрики
    public static function metricDelete($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');

        $del = MetricsTable::delete($query['ID']);

        try {
            if ($del->isSuccess()) {
                return $del->isSuccess();
            }
        } catch (SystemException $exception) {
            return $exception->getMessage();
        }
    }

    //TODO Добавление значения по метрике
    public static function metricUnitAdd($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');
        $fields = [
            "METRIC_ID" => $query['unit']['METRIC_ID'],
            "IP" => $query['unit']['IP'],
            "PORT" => $query['unit']['PORT'],
            "ABONENT" => $query['unit']['ABONENT'],
            "ABONENT_ID" => $query['unit']['ABONENT_ID'],
            "OLD_VALUE" => $query['unit']['OLD_VALUE'],
            "NEW_VALUE" => $query['unit']['NEW_VALUE'],
            "DIFF_VALUE" => $query['unit']['DIFF_VALUE'],
            "DATE_CREATE" => new \Bitrix\Main\Type\DateTime($query['unit']['DATE_CREATE'] ?: "", "Y-m-d H:i:s"),
        ];

        $add = MetricsUnitTable::add($fields);

        try {
            if ($add->isSuccess()) {
                return $add->getID();
            }
        } catch (\SystemException $exception) {
            return $exception->getMessage();
        }
    }

    //TODO Обновление значения по метрике
    public static function metricUnitUpdate($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');
        $upd = MetricsUnitTable::update($query['ID'], $query['fields']);
        try {
            if ($upd->isSuccess()) {
                return $upd->isSuccess();
            }
        } catch (\SystemException $exception) {
            return $exception->getMessage();
        }
    }

    //TODO получение списка значений по метрике
    public static function metricUnitGetList($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');

        $entity = [
            'order' => $query['order'] ?: [],
            'filter' => $query['filter'] ?: [],
            'select' => $query['select'] ?: []
        ];

        $add = MetricsUnitTable::getList($entity);

        try {
            $result = $add->fetchAll();
            foreach ($result as &$value) {
                $value['DATE_CREATE'] = $value['DATE_CREATE']->toString();
            }
            unset($value);

            return $result;
        } catch (\SystemException $exception) {
            return $exception->getMessage();
        }
    }

    //TODO удаленик значения по метрке
    public static function metricUnitDelete($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');

        $del = MetricsUnitTable::delete($query['ID']);

        try {
            if ($del->isSuccess()) {
                return $del->isSuccess();
            }
        } catch (SystemException $exception) {
            return $exception->getMessage();
        }
    }

    //TODO Добовление значения в статус  проактивного сервиса
    public static function abonentStatusAdd($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');

        $fields = [
            "NAME" => $query['status']['NAME']
        ];

        $add = AbonentStatusTable::add($fields);

        try {
            if ($add->isSuccess()) {
                return $add->getID();
            }
        } catch (\SystemException $exception) {
            return $exception->getMessage();
        }
    }

    //TODO  Обновления значения в статусах проактивного сервиса
    public static function abonentStatusUpdate($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');
        $upd = AbonentStatusTable::update($query['ID'], $query['fields']);
        try {
            if ($upd->isSuccess()) {
                return $upd->isSuccess();
            }
        } catch (\SystemException $exception) {
            return $exception->getMessage();
        }
    }

    //TODO получение значений в  статусах проактивного сервиса
    public static function abonentStatusGetList($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');

        $entity = [
            'order' => $query['order'] ?: [],
            'filter' => $query['filter'] ?: [],
            'select' => $query['select'] ?: []
        ];

        $add = AbonentStatusTable::getList($entity);

        try {
            return $add->fetchAll();
        } catch (\SystemException $exception) {
            return $exception->getMessage();
        }
    }

    //TODO Удаление значения в статусах проактивного сервиса
    public static function abonentStatusDelete($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');

        $del = AbonentStatusTable::delete($query['ID']);

        try {
            if ($del->isSuccess()) {
                return $del->isSuccess();
            }
        } catch (SystemException $exception) {
            return $exception->getMessage();
        }
    }

    //TODO получение списка смарт процесса
    public static function getListSmart($query, $nav, \CRestServer $server)
    {

        Bitrix\Main\Loader::includeModule("crm");
        $dynamicTypesMap = Service\Container::getInstance()->getDynamicTypesMap()->load();
        $smarts = [];
        foreach ($dynamicTypesMap->getTypes() as $type) {
            $smarts[] = array(
                "ID" => $type->getEntityTypeId(),
                "NAME" => $type->getTitle(),
            );
        }
        return $smarts;
    }

    //TODO получение списка полей по смарт процессу
    public static function getUserFields($query, $nav, \CRestServer $server)
    {

        Bitrix\Main\Loader::includeModule('crm');

        $typeid = $query['ENTITY_ID']; //Идентификатор смарт-процесса

        $factory = Service\Container::getInstance()->getFactory($typeid);

        $stages = $factory->getFieldsCollection()->toArray();
        $fieldLeadPartner = [];
        foreach ($stages as $key => $value) {
            $fieldLeadPartner[] = [
                'ID' => $key,
                'NAME' => $value['TITLE']
            ];
        }


        return $fieldLeadPartner;
    }

    //TODO Получение списка Списков
    public static function getLists($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('iblock');
        $res = CIBlock::GetList(
            array("SORT" => "ASC"),
            array('TYPE' => 'lists'),
            true
        );
        $result = [];
        while ($row = $res->fetch()) {
            $result[] = [
                'ID' => $row['ID'],
                'NAME' => $row['NAME'],
                'API_CODE' => $row['API_CODE'],
            ];
        }
        return $result;
    }

    // TODO получение списка элементов
    public static function getListElement($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('iblock');
        $rs = CIBlockElement::GetList(
            array(),
            array("IBLOCK_ID" => $query['ID']),
            false,
            false,
            array('ID', 'IBLOCK_ID', 'NAME')
        );
        $result = [];
        while ($row = $rs->fetch()) {
            $result[] = $row;
        }
        return $result;
    }

    //TODO Добавляем настройки
    public static function settingAdd($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');

        $fields = [
            "NAME" => $query['setting']['NAME'],
            'SETTING_STRING' => json_encode($query['setting']['SETTING_STRING'], JSON_UNESCAPED_UNICODE),
        ];

        $add = SettingsTable::add($fields);

        try {
            if ($add->isSuccess()) {
                return $add->getID();
            }
        } catch (\SystemException $exception) {
            return $exception->getMessage();
        }
    }

    public static function settingGetList($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');

        $entity = [
            'order' => $query['order'] ?: [],
            'filter' => $query['filter'] ?: [],
            'select' => $query['select'] ?: []
        ];

        $add = SettingsTable::getList($entity);

        try {
            return $add->fetchAll();
        } catch (\SystemException $exception) {
            return $exception->getMessage();
        }
    }

    public static function settingUpdate($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');

        $fields = [
            'SETTING_STRING' => json_encode($query['fields']['SETTING_STRING'], JSON_UNESCAPED_UNICODE),
        ];

        $upd = SettingsTable::update($query['ID'], $fields);
        try {
            if ($upd->isSuccess()) {
                return $upd->isSuccess();
            }
        } catch (\SystemException $exception) {
        }
    }

    public static function getUiProactive($query, $nav, \CRestServer $server)
    {
        Bitrix\Main\Loader::includeModule('mws.proactive');
        Bitrix\Main\Loader::includeModule('crm');


        $dynamicTypeID = $query['enID']; // 
        $container = \Bitrix\Crm\Service\Container::getInstance();


        $dynamicDataClass = $container->getFactory($dynamicTypeID)->getDataClass();
        $arFields = [
            'filter' => $query['filter'] ? $query['filter'] : [],
            'runtime' => array(
                new \Bitrix\Main\Entity\ReferenceField(
                    'LK',
                    $dynamicDataClass,
                    ['this.ABONENT' => 'ref.UF_CRM_5_LS_NUMBER']
                ),
                new \Bitrix\Main\Entity\ReferenceField(
                    'DEAL',
                    Bitrix\Crm\DealTable::getEntity(),
                    ['=this.DEAL_ID' => 'ref.ID']
                ),
                new \Bitrix\Main\Entity\ReferenceField(
                    'USER',
                    \Bitrix\Main\UserTable::getEntity(),
                    ['=this.DEAL.CREATED_BY_ID' => 'ref.ID']
                ),
                new \Bitrix\Main\Entity\ReferenceField(
                    'STATUS',
                    Bitrix\Crm\StatusTable::getEntity(),
                    ['=this.DEAL.STAGE_ID' => 'ref.STATUS_ID']
                ),


            ),
            "select" => array(
                "ID", 'ABONENT', 'IP', 'PORT', 'STATUS_ID', 'DEAL_ID', 'DATE_CREATE', 'LK_ID' => 'LK.ID',
                'LK_COMPANY_ID' => 'LK.COMPANY_ID',
                'LK_CITY' => 'LK.UF_CRM_5_CITY_LIST',
                'LK_ADDRES' => "LK.UF_CRM_5_ADDRESS_CONNECTION_TEXT",
                'DEAL_STAGE' => 'DEAL.STAGE_ID',
                'DEAL_CREATED_BY_ID' => 'DEAL.CREATED_BY_ID',
                'USER_NAME' => "USER.NAME",
                'USER_LAST_NAME' => "USER.LAST_NAME",
                "STATUS_NAME" => 'STATUS.NAME'
            ),
            "count_total" => true,
        ];


        if ($query['limited']) {
            if ($query['limited']['limit']) {
                $arFields["limit"] = $query['limited']['limit'];
            } else {
                $arFields['limit'] = 10;
            }

            if ($query['limited']['page'] > 0) {

                $arFields['offset'] =  (int)$query['limited']['limit'] * (int)$query['limited']['page'];
            } else {
                $arFields['offset'] = 0;
            }
        }


        $q = Mywebstor\Proactive\AbonentTable::getList($arFields);

        // $q->setSelect(array("ID", 'ABONENT', 'IP', 'PORT', 'STATUS_ID', 'DEAL_ID'));

        $count = $q->getCount();

        $abonent = [];

        while ($row = $q->fetch()) {

            $abonent[] = [
                "ID" => $row["ID"],
                'ABONENT' => $row['ABONENT'],
                'IP' => $row['IP'],
                'PORT' => $row['PORT'],
                'STATUS_ID' => $row['STATUS_ID'],
                'DEAL_ID' => $row['DEAL_ID'],
                'DATE_CREATE' => $row['DATE_CREATE']->toString(),
                "LK_ID" => $row['LK_ID'],
                "LK_COMPANY_ID" => $row['LK_COMPANY_ID'],
                "LK_CITY" => $row['LK_CITY'],
                "abonentAddress" => $row['LK_ADDRES'],
                'DEAL_STAGE' => $row['DEAL_STAGE'],
                'STATUS_NAME' => $row['STATUS_NAME'],
                'DEAL_CREATED_BY_ID' => $row['DEAL_CREATED_BY_ID'],
                "USER_NAME" => $row['USER_NAME'] . ' ' .  $row['USER_LAST_NAME'],

            ];
        }

        foreach ($abonent as &$elem) {
            $elem['DROP_METRIC'] = 0;
            $elem['METRIC'] = [];

            $metrics = Mywebstor\Proactive\MetricsTable::getlist(['select' => ['ID', 'NAME', 'METRIC_ASUO']])->fetchAll();
            foreach ($metrics as $metric) {
                $units = Mywebstor\Proactive\MetricsUnitTable::getlist(['order' => ['ID' => 'DESC'], 'filter' => ['ABONENT_ID' => $elem['ID'], "METRIC_ASUO" => $metric['METRIC_ASUO']], 'select' => ['ID', 'NEW_VALUE', 'DATE_CREATE']])->fetchAll();
                if (count($units) > 0) {

                    $elem['METRIC'][] = [
                        'NAME' => $metric['NAME'],
                        'COUNT' => count($units),
                        'LAST_METRIC' => $units[0]['NEW_VALUE'],
                        'LAST_DATE' => $units[0]['DATE_CREATE'] ? $units[0]['DATE_CREATE']->toString() : "",
                        'ABONENT_ID' => $elem['ID'],
                        "METRIC_ASUO" => $metric['METRIC_ASUO'],
                    ];
                    $elem['DROP_METRIC'] = $elem['DROP_METRIC'] + count($units);
                }
            }
        }
        unset($elem);

        return ['abonent' => $abonent, 'totalRecords' => $count];
    }
    public static function proactiveSetDeal($query, $nav, \CRestServer $server)
    {



        \Bitrix\Main\Loader::includeModule('crm');
        \Bitrix\Main\Loader::includeModule('mws.proactive');
        $containerSmart = \Bitrix\Crm\Service\Container::getInstance();
        $factorySmart = $containerSmart->getFactory(166);
        $smart =  $factorySmart->getItem($query['lkId']);
        $resSmart = $smart->getCompatibleData();

        $fieldAliases = array(
            "365" => "32",
            "366" => "33",
        );

        $containerCompany = \Bitrix\Crm\Service\Container::getInstance();
        $factoryCompany = $containerCompany->getFactory(\CCrmOwnerType::Company);
        $company =  $factoryCompany->getItem($resSmart['COMPANY_ID']);
        $resCompany = $company->getCompatibleData();




        $container = \Bitrix\Crm\Service\Container::getInstance();
        $factory = $container->getFactory(\CCrmOwnerType::Deal);
        $item = $factory->createItem();
        $item->set('PARENT_ID_166', $resSmart['ID']);
        $item->set('CATEGORY_ID', 2);
        $item->set('COMPANY_ID', $resSmart['COMPANY_ID']);
        $item->set('UF_CRM_64EC912D44388', $fieldAliases[$resCompany['UF_CLIENT_TYPE']]);

        $item->set('CONTACT_IDS', $resSmart['CONTACT_IDS']);
        $item->set('UF_CRM_64EDAFBE9651B', $resSmart['UF_CRM_5_CITY_LIST']);
        $item->set('UF_CRM_1694685035186', $resSmart['UF_CRM_5_ADDRESS_CONNECTION_TEXT']);

        if (count($resSmart['UF_CRM_5_SERVICE_IB'])  ==  1) {
            if (!in_array(81, $resSmart['UF_CRM_5_SERVICE_IB']) && !in_array(3535, $resSmart['UF_CRM_5_SERVICE_IB'])) {
                $item->set('UF_CRM_1710254867', $resSmart['UF_CRM_5_SERVICE_IB'][0]); //услуга
            }
        }

        $item->set('UF_CRM_1696253493798', $resSmart['UF_CRM_5_ADDRESS_ENTRANCE']);
        $item->set('UF_CRM_1696253504422', $resSmart['UF_CRM_5_ADDRESS_FLOOR']);
        $item->set('UF_CRM_1696253512245', $resSmart['UF_CRM_5_ADDRESS_APART']);

        $operation = $factory->getAddOperation($item);
        $saveResult = $operation
            ->disableCheckFields()
            ->disableCheckAccess()
            ->disableAfterSaveActions()
            ->enableAutomation()
            ->enableBizProc()
            ->launch();
        $id = $saveResult->getId();

        $upd = AbonentTable::update($query['abonentId'], ['DEAL_ID' => $id]);

        return $id;
    }



    public static function abonentUpdate($query, $nav, \CRestServer $server)
    {

        Bitrix\Main\Loader::includeModule('mws.proactive');
        $upd = AbonentTable::update($query['ID'], ['STATUS_ID' => $query['fields']['STATUS_ID']]);
        try {
            if ($upd->isSuccess()) {
                return $upd->isSuccess();
            }
        } catch (\SystemException $exception) {
            return $exception->getMessage();
        }
    }

    //TODO получение ip для открепления
    public static function ipGetList($query, $nav, \CRestServer $server)
    {
        global $USER;
        // return $query['filter'];

        Bitrix\Main\Loader::includeModule('mws.proactive');
        Bitrix\Main\Loader::includeModule('crm');


        $dynamicTypeID = $query['enID'];
        $container = \Bitrix\Crm\Service\Container::getInstance();


        $dynamicDataClass = $container->getFactory($dynamicTypeID)->getDataClass();
        $arFields = array(
            'filter' => $query['filter'] ? $query['filter'] : [],
            'runtime' => array(
                new \Bitrix\Main\Entity\ReferenceField(
                    'LK',
                    $dynamicDataClass,
                    ['=this.PERSONAL_ACCOUNT' => 'ref.UF_CRM_5_LS_NUMBER']
                ),
                new \Bitrix\Main\Entity\ReferenceField(
                    'USER',
                    \Bitrix\Main\UserTable::getEntity(),
                    ['=this.USER_ID' => 'ref.ID']
                ),
            ),
            'select' => [
                'ID', 'PERSONAL_ACCOUNT', 'PESONAL_DATA', 'IP_ADDRESS', 'GATEWAY', 'PORT', 'STATUS_ID', 'USER_ID', 'DATE_CREATE', 'DATE_CLOSED',
                'LK_ID' => 'LK.ID',
                'LK_COMPANY_ID' => 'LK.COMPANY_ID',
                'LK_CITY' => 'LK.UF_CRM_5_CITY_LIST',
                'USER_NAME' => "USER.NAME",
                'USER_LAST_NAME' => "USER.LAST_NAME",
            ],
            "count_total" => true,
        );

        if ($query['limited']) {
            if ($query['limited']['limit']) {
                $arFields["limit"] = $query['limited']['limit'];
            } else {
                $arFields['limit'] = 10;
            }

            if ($query['limited']['page'] > 0) {

                $arFields['offset'] =  (int)$query['limited']['limit'] * (int)$query['limited']['page'];
            } else {
                $arFields['offset'] = 0;
            }
        }


        $getIp = IpCheckTable::getList($arFields);
        $result = [];

        $count = $getIp->getCount();
        while ($row = $getIp->fetch()) {
            $result[] =  [
                "ID" => $row['ID'],
                "PERSONAL_ACCOUNT" => $row['PERSONAL_ACCOUNT'],
                "PESONAL_DATA" => $row['PESONAL_DATA'],
                "IP_ADDRESS" => $row['IP_ADDRESS'],
                "GATEWAY" => $row['GATEWAY'],
                "PORT" => $row['PORT'],
                "USER_ID" => $row['USER_ID'],
                "STATUS_ID" => $row['STATUS_ID'],
                "DATE_CREATE" => $row['DATE_CREATE']->toString(),
                "DATE_CLOSED" => $row['DATE_CLOSED'] ? $row['DATE_CLOSED']->toString() : '',
                "LK_ID" => $row['LK_ID'],
                "LK_COMPANY_ID" => $row['LK_COMPANY_ID'],
                "LK_CITY" => $row['LK_CITY'],
                "USER_NAME" => $row['USER_NAME'] . ' ' .  $row['USER_LAST_NAME'],
            ];
        }


        return ['ip' => $result, "totalRecords" => $count];
    }

    public static function ipReleases($query, $nav, \CRestServer $server)
    {

        $select = $query['elements'];

        foreach ($select as $item) {

            IpCheckTable::update($item['ID'], [
                'STATUS_ID' => 2,
                'DATE_CLOSED' => new \Bitrix\Main\Type\DateTime($item["dateCreate"], "Y-m-d H:i:s"),
                'USER_ID' => (int)$query['userId'],
            ]);
        }

        return 'OK';
    }
}
