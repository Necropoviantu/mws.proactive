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

class AbonentStatusTable extends DataManager{

    public static function getTableName()
    {
        return 'mws_abonent_status';
    }
    public static function getMap()
    {
        return array(
            new IntegerField(
                'ID',
                array(
                    'primary' => true,
                    'autocomplite' => true,
                    'title' => Loc::getMessage('MWS_PROACTIVE_ABONENT_STATUS_ID')
                )
            ),
            new StringField(
                'NAME',
                array(
                    'required'=> true,
                    'default_value'=>'',
                    'title' => Loc::getMessage('MWS_PROACTIVE_ABONENT_STATUS_NAME')
                )
            ),


        );
    }


}