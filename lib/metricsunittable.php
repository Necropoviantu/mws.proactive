<?php

namespace Mywebstor\Proactive;

use Bitrix\Main\Entity\StringField;
use Bitrix\Main\Entity\DatetimeField;
use Bitrix\Main\Entity\IntegerField;
use Bitrix\Main\Localization\Loc;
use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\Relations\Reference;
use Bitrix\Main\ORM\Query\Join;


Loc::loadMessages(__FILE__);

class MetricsUnitTable extends DataManager
{

    public static function getTableName()
    {
        return 'mws_metrics_units';
    }

    public static function getMap()
    {


        return array(
            new IntegerField(
                'ID',
                array(
                    'primary' => true,
                    'autocomplite' => true,
                    'title' => Loc::getMessage('MWS_PROACTIVE_METRIC_UNITS_ID')
                )
            ),
            new IntegerField(
                'METRIC_ID',
                array(
                    'required' => true,
                    'default_value' => '',
                    'title' => Loc::getMessage('MWS_PROACTIVE_METRIC_UNITS_METRIC_ID')
                )
            ),
            new StringField(
                'METRIC_ASUO',
                    array(
                        'required'=>true,
                        'default_value'=>'',
                        'title'=>Loc::getMessage('MWS_PROACTIVE_METRIC_UNITS_METRIC_ASUO')
                    )
            ),   new StringField(
                'IP',
                    array(
                        'required'=>true,
                        'default_value'=>true,
                        'title'=>Loc::getMessage('MWS_PROACTIVE_METRIC_UNITS_IP')
                    )
            ),
            new StringField(
                'PORT',
                array(
                    'required'=>true,
                    'default_value'=>true,
                    'title'=>Loc::getMessage('MWS_PROACTIVE_METRIC_UNITS_PORT')
                )
            ),
            new StringField(
                'ABONENT',
                array(
                    'required'=>true,
                    'default_value'=>true,
                    'title'=>Loc::getMessage('MWS_PROACTIVE_METRIC_UNITS_ABONENT')
                )
            ),
            new IntegerField(
              'ABONENT_ID',
                array(
                    'required'=>false,
                    'default_value'=> '',
                    'title'=>Loc::getMessage('MWS_PROACTIVE_METRIC_UNITS_ABONENT_ID')
                )
            ),
            new StringField(
                'OLD_VALUE',
                array(
                    'required'=>true,
                    'default_value'=>true,
                    'title'=>Loc::getMessage('MWS_PROACTIVE_METRIC_UNITS_OLD_VALUE')
                )
            ),
            new StringField(
                'NEW_VALUE',
                array(
                    'required'=>true,
                    'default_value'=>true,
                    'title'=>Loc::getMessage('MWS_PROACTIVE_METRIC_UNITS_NEW_VALUE')
                )
            ),
            new StringField(
                'DIFF_VALUE',
                array(
                    'required'=>true,
                    'default_value'=>true,
                    'title'=>Loc::getMessage('MWS_PROACTIVE_METRIC_UNITS_DIFF_VALUE')
                )
            ),
            new DatetimeField(
                'DATE_CREATE',
                  array(
                      'required'=>true,
                      'default_value'=>true,
                      'title'=>Loc::getMessage('MWS_PROACTIVE_METRIC_UNITS_DATE_CREATE')
                  )
            ),
            (new Reference(
                'ABONENT_ENT',
                AbonentTable::class,
                Join::on('this.ABONENT_ID', 'ref.ID')
            )),
            (new Reference(
                'METRIC',
                MetricsTable::class,
                Join::on('this.METRIC_ASUO', 'ref.METRIC_ASUO')
            ))

        );
    }


}