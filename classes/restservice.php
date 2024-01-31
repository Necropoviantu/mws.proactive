<?php

class MwsProactiveRest extends IRestService
{
 public static function OnRestServiceBuildDescription()
 {
     return array(
       "mwsproactiverest"=>array(
           //TODO методы реста для фронта управление метриками
          'mwsproactiverest.metric.add' => array(__CLASS__, "metricAdd"),
          'mwsproactiverest.metric.update' => array(__CLASS__, "metricUpdate"),
          'mwsproactiverest.metric.delete' => array(__CLASS__, "metricDelete"),
          'mwsproactiverest.metric.getByID' => array(__CLASS__, "metricGetByID"),
          'mwsproactiverest.metric.getList' => array(__CLASS__, "metricGetList"),
           //TODO методы реста для фронта заполнения метрик
           'mwsproactiverest.metricunit.add' => array(__CLASS__,'metricUnitAdd'),
           'mwsproactiverest.metricunit.update' => array(__CLASS__,'metricUnitUpdate'),
           'mwsproactiverest.metricunit.delete' => array(__CLASS__,'metricUnitDeletr'),
           'mwsproactiverest.metricunit.getByID' => array(__CLASS__,'metricUnitGetByID'),
           'mwsproactiverest.metricunit.getList' =>array(__CLASS__,'metricUnitGetList')
       ),
     );
 }





}