<?php

namespace Mywebstor\Proactive;

use Bitrix\Main\Entity\IntegerField;
use Bitrix\Main\Entity\StringField;
use Bitrix\Main\Localization\Loc;
use Bitrix\Main\ORM\Data\DataManager;

Loc::loadMessages(__FILE__);

class MetricsTable extends DataManager
{

    public static function getTableName()
    {
        return 'mws_metrics';
    }

    public static function getMap()
    {
        return array(
            new IntegerField(
                'ID',
                array(
                    'primary' => true,
                    'autocomplite' => true,
                    'title' => Loc::getMessage("MWS_PROACTIVE_METRIC_ID")
                )
            ),
            new StringField(
                'METRIC_ASUO',
                array(
                    'required' => true,
                    'default_value' => '',
                    'title' => Loc::getMessage("MWS_PROACTIVE_METRIC_ASUO")
                )
            ),new StringField(
                'NAME',
                array(
                    'required' => true,
                    'default_value' => '',
                    'title' => Loc::getMessage("MWS_PROACTIVE_METRIC_NAME")
                )
            ),
            new StringField(
                'MEANING',
                array(
                    "required" => true,
                    "default_value" => '',
                    "title" => Loc::getMessage('MWS_PROACTIVE_METRIC_MEANING'),
                )
            ),

            new StringField(
                'STANDART',
                array(
                    "required" => true,
                    "default_value" => '',
                    "title" => Loc::getMessage('MWS_PROACTIVE_METRIC_STANDART'),
                )
            ),
            new StringField(
                'DESCRIPTION',
                array(
                    "required" => true,
                    "default_value" => '',
                    "title" => Loc::getMessage('MWS_PROACTIVE_METRIC_DESCRIPTION'),
                )
            ),
            new StringField(
                'TESTS',
                array(
                    "required" => true,
                    "default_value" => '',
                    "title" => Loc::getMessage('MWS_PROACTIVE_METRIC_TESTS'),
                )
            ),
        );

    }
}