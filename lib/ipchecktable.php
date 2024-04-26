<?php

namespace Mywebstor\Proactive;

use Bitrix\Main\Localization\Loc;
use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\Entity\IntegerField;
use Bitrix\Main\Entity\DatetimeField;
use Bitrix\Main\Entity\StringField;
use Bitrix\Main\ORM\Fields\Relations\Reference;
use Bitrix\Main\ORM\Query\Join;


Loc::loadMessages(__FILE__);

class IpCheckTable extends DataManager
{
    public static function getTableName()
    {
        return 'mws_ip_check';
    }

    public static function getMap()
    {
        return array(
            new IntegerField(
                'ID',
                array(
                    'primary' => true,
                    'autocomplite' => true,
                    'title' => Loc::getMessage('MWS_PROACTIVE_IP_CHECK_ID')
                )
            ),
            new IntegerField(
                'PERSONAL_ACCOUNT',
                array(
                    'required' => true,
                    'default_value' => '',
                    'title' => Loc::getMessage('MWS_PROACTIVE_IP_CHECK_PERSONAL_ACCOUNT')
                )
            ),
            new StringField(
                'PESONAL_DATA',
                array(
                    'required' => '',
                    'default_value' => '',
                    'title' => Loc::getMessage('MWS_PROACTIVE_IP_CHECK_PESONAL_DATA')
                )
            ),
            new StringField(
                'IP_ADDRESS',
                array(
                    'required' => '',
                    'default_value' => '',
                    'title' => Loc::getMessage('MWS_PROACTIVE_IP_CHECK_IP_ADDRESS')
                )
            ),
            new StringField(
                'GATEWAY',
                array(
                    'required' => '',
                    'default_value' => '',
                    'title' => Loc::getMessage('MWS_PROACTIVE_IP_CHECK_GATEWAY')
                )
            ),
            new StringField(
                'PORT',
                array(
                    'required' => '',
                    'default_value' => '',
                    'title' => Loc::getMessage('MWS_PROACTIVE_IP_CHECK_PORT')
                )
            ),
            new StringField(
                'STATUS_ID',
                array(
                    'required' => '',
                    'default_value' => '',
                    'title' => Loc::getMessage('MWS_PROACTIVE_IP_CHECK_STATUS_ID')
                )
            ),
            new StringField(
                'USER_ID',
                array(
                    'required' => '',
                    'default_value' => '',
                    'title' => Loc::getMessage('MWS_PROACTIVE_IP_CHECK_USER_ID')
                )
            ),
            new DatetimeField(
                'DATE_CREATE',
                array(
                    'required' => true,
                    'default_value' => true,
                    'title' => Loc::getMessage('MWS_PROACTIVE_IP_CHECK_DATE_CREATE')
                )

            ),
            new DatetimeField(
                'DATE_CLOSED',
                array(
                    'required' => "",
                    'default_value' => "",
                    'title' => Loc::getMessage('MWS_PROACTIVE_IP_CHECK_DATE_CLOSED')
                )

            ),
        );
    }
}
