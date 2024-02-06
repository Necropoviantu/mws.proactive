<?php

use Bitrix\Main\SystemException;
use Mywebstor\Proactive\MetricsTable;
use Mywebstor\Proactive\MetricsUnitTable;
use Mywebstor\Proactive\AbonentStatusTable;
use Bitrix\Crm\Service;
use Bitrix\Main\Entity\Query\Join;
use Bitrix\Main\Entity\ReferenceField;

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
                'mwsproactiverest.abonentStatus.add'=>array(__CLASS__, 'abonentStatusAdd'),
                'mwsproactiverest.abonentStatus.update'=>array(__CLASS__,'abonentStatusUpdate'),
                'mwsproactiverest.abonentStatus.getList'=>array(__CLASS__,'abonentStatusGetList'),
                'mwsproactiverest.abonentStatus.delete'=>array(__CLASS__,'abonentStatusDelete'),

                //TODO Список Смарт процессов
                "mwsproactiverest.smart.getSmarts"=>array(__CLASS__,'getListSmart'),
                "mwsproactiverest.getUserFields"=>array(__CLASS__,'getUserFields'),
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
            "METRIC_ASUO"=> $query['metric']['METRIC_ASUO'],
            "MEANING" => $query['metric']['MEANING'],
            "STANDART" => $query['metric']['STANDART'],
            "DESCRIPTION" => $query['metric']['DESCRIPTION'],
            "TESTS" => $query['metric']['TESTS'],
        ];

        $add =  MetricsTable::add($fields);

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
            'order' =>  $query['order'] ?: [],
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
                return $upd->isSuccess() ;
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
                return $del->isSuccess() ;
            }
        } catch (SystemException $exception) {
          return $exception->getMessage() ;
        }
    }
    //TODO Добавление значения по метрике
    public static  function metricUnitAdd($query, $nav, \CRestServer $server){
        Bitrix\Main\Loader::includeModule('mws.proactive');
        $fields = [
             "METRIC_ID" => $query['unit']['METRIC_ID'],
             "IP" => $query['unit']['IP'],
             "PORT" => $query['unit']['PORT'],
             "ABONENT" => $query['unit']['ABONENT'],
             "ABONENT_ID" => $query['unit']['ABONENT_ID'],
             "OLD_VALUE" => $query['unit']['OLD_VALUE'],
             "NEW_VALUE" => $query['unit']['NEW_VALUE'],
             "DIFF_VALUE"=> $query['unit']['DIFF_VALUE'],
             "DATE_CREATE" => new \Bitrix\Main\Type\DateTime( $query['unit']['DATE_CREATE'] ?: "", "Y-m-d H:i:s") ,
        ];

        $add =  MetricsUnitTable::add($fields);

        try {
            if ($add->isSuccess()) {
                return $add->getID();
            }

        } catch (\SystemException $exception) {
            return $exception->getMessage();
        }

    }
    //TODO Обновление значения по метрике
    public static function metricUnitUpdate($query, $nav, \CRestServer $server){
        Bitrix\Main\Loader::includeModule('mws.proactive');
        $upd = MetricsUnitTable::update($query['ID'], $query['fields']);
        try {
            if ($upd->isSuccess()) {
                return $upd->isSuccess() ;
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
            'order' =>  $query['order'] ?: [],
            'filter' => $query['filter'] ?: [],
            'select' => $query['select'] ?: []
        ];

        $add = MetricsUnitTable::getList($entity);

        try {
            return $add->fetchAll();
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
                return $del->isSuccess() ;
            }
        } catch (SystemException $exception) {
            return $exception->getMessage();
        }
    }
    //TODO Добовление значения в статус  проактивного сервиса
    public static function abonentStatusAdd($query, $nav, \CRestServer $server){
        Bitrix\Main\Loader::includeModule('mws.proactive');

        $fields = [
            "NAME" => $query['status']['NAME']
        ];

        $add =  AbonentStatusTable::add($fields);

        try {
            if ($add->isSuccess()) {
                return $add->getID();
            }

        } catch (\SystemException $exception) {
            return $exception->getMessage();
        }
    }
    //TODO  Обновления значения в статусах проактивного сервиса
    public static function abonentStatusUpdate($query, $nav, \CRestServer $server){
        Bitrix\Main\Loader::includeModule('mws.proactive');
        $upd = AbonentStatusTable::update($query['ID'], $query['fields']);
        try {
            if ($upd->isSuccess()) {
                return $upd->isSuccess() ;
            }
        } catch (\SystemException $exception) {
            return $exception->getMessage();
        }
    }
    //TODO получение значений в  статусах проактивного сервиса
    public static function abonentStatusGetList($query, $nav, \CRestServer $server){
        Bitrix\Main\Loader::includeModule('mws.proactive');

        $entity = [
            'order' =>  $query['order'] ?: [],
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
    public static function abonentStatusDelete($query, $nav, \CRestServer $server){
        Bitrix\Main\Loader::includeModule('mws.proactive');

        $del = AbonentStatusTable::delete($query['ID']);

        try {
            if ($del->isSuccess()) {
                return $del->isSuccess() ;
            }
        } catch (SystemException $exception) {
            return $exception->getMessage();
        }
    }


    public static function getListSmart($query, $nav, \CRestServer $server){

        Bitrix\Main\Loader::includeModule("crm");
        $dynamicTypesMap = Service\Container::getInstance()->getDynamicTypesMap()->load();
        $smarts = [];
        foreach ($dynamicTypesMap->getTypes() as $type)
        {
          $smarts[] = array(
                    "ID"=>$type->getId(),
                    "NAME"=>$type->getTitle(),
                    );
        }
        return $smarts;
    }
    public  static function getUserFields($query, $nav, \CRestServer $server){
        $fieldLeadPartner = \Bitrix\Main\UserFieldTable::getList(array(
            'filter' => array(
                'ENTITY_ID' => $query['ENTITY_ID'],
                "FIELD.LANGUAGE_ID"=>'ru'
            ),
            'order' => array('ENTITY_ID' => 'ASC', 'SORT' => 'ASC'),
            'runtime' => array(
                new \Bitrix\Main\ORM\Fields\Relations\Reference(
                    'FIELD',
                    \Bitrix\Main\UserFieldLangTable::getEntity(),
                    array('=this.ID' => 'ref.USER_FIELD_ID')
                )
            ),
            'select'=>["ID",'ENTITY_ID',"FIELD_NAME","NAME"=>"FIELD.EDIT_FORM_LABEL"]

        ))->fetchAll();
        return $fieldLeadPartner;
    }

}