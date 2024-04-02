<?php
namespace Mywebstor\Proactive;

use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\Entity\StringField;
use Bitrix\Main\Localization\Loc;
use Bitrix\Main\Entity\IntegerField;


Loc::loadMessages(__FILE__);
class SettingsTable extends DataManager{

    public  static function  getTableName()
    {
       return 'mws_settings';
    }
    public  static function getMap()
    {

        return array(
            new IntegerField(
                'ID',
                array(
                    'primary'=>true,
                    'autocomplite'=>true,
                    'title'=>Loc::getMessage('MWS_PROACTIVE_SETTINGS_ID')
                )
            ),
            new StringField(
                'NAME',
                array(
                    'required' => true,
                    'default_value' => '',
                    'title' => Loc::getMessage("MWS_PROACTIVE_SETTINGS_NAME")
                )
            ),
            new StringField(
                'SETTING_STRING',
                array(
                    'required' => true,
                    'default_value' => '',
                    'title' => Loc::getMessage("MWS_PROACTIVE_SETTINGS_SETTING_STRING")
                )
            ),

        );
    }

}