<?php

use Bitrix\Main\SystemException;

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
                'mwsproactiverest.metricunit.delete' => array(__CLASS__, 'metricUnitDeletr'),
                'mwsproactiverest.metricunit.getByID' => array(__CLASS__, 'metricUnitGetByID'),
                'mwsproactiverest.metricunit.getList' => array(__CLASS__, 'metricUnitGetList'),
                //TODO Метод проверки таблиц в базе данных
                'mwsproactiverest.checktable' => array(__CLASS__, 'checkTableOnBase'),
            ),

        );
    }

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

    public static function getToken($query, $nav, \CRestServer $server)
    {
        $token = unserialize(COption::GetOptionString("mws.proactive", "mws_proactive_integration_token", "a:0:{}"));
        return $token;
    }

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
            "MEANING" => $query['metric']['MEANING'],
            "STANDART" => $query['metric']['STANDART'],
            "DESCRIPTION" => $query['metric']['DESCRIPTION'],
            "TESTS" => $query['metric']['TESTS'],
        ];

        $add = Mywebstor\Proactive\MetricsTable::add($fields);

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
            'order' =>  $query['order'] ? $query['order'] : [],
            'filter' => $query['filter'] ? $query['filter'] : [],
            'select' => $query['select'] ? $query['select'] : []
        ];

        $add = Mywebstor\Proactive\MetricsTable::getList($entity);

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
        $upd = Mywebstor\Proactive\MetricsTable::update($query['ID'], $query['fields']);
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

        $del = Mywebstor\Proactive\MetricsTable::delete($query['ID']);

        try {
            if ($del->isSuccess()) {
                return $del->isSuccess() ;
            }
        } catch (SystemException $exception) {
            print_r($exception->getMessage());
        }
    }

}