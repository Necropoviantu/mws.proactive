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

class AbonentTable extends DataManager{

    public static function getTableName()
    {
           return 'mws_abonent';
    }

    public static function getMap(){
        return array(
            new IntegerField(
                'ID',
                array(
                    'primary' => true,
                    'autocomplite' => true,
                    'title' => Loc::getMessage('MWS_PROACTIVE_ABONENT_ID')
                )
            ),
            new StringField(
              'ABONENT',
                array(
                    'required'=> true,
                    'default_value'=>'',
                    'title' => Loc::getMessage('MWS_PROACTIVE_ABONENT_ABONENT')
                )
            ),
            new StringField(
                'IP',
                array(
                    'required'=> true,
                    'default_value'=>'',
                    'title' => Loc::getMessage('MWS_PROACTIVE_ABONENT_IP')
                )
            ),
            new StringField(
                'PORT',
                array(
                    'required'=> true,
                    'default_value'=>'',
                    'title' => Loc::getMessage('MWS_PROACTIVE_ABONENT_PORT')
                )
            ),
            new IntegerField(
                'STATUS_ID',
                array(
                    'required' => true,
                    'default_value'=>'',
                    'title' => Loc::getMessage('MWS_PROACTIVE_ABONENT_STATUS_ID')
                )
            ),
            new IntegerField(
                'DEAL_ID',
                array(
                    'required' => true,
                    'default_value'=>'',
                    'title' => Loc::getMessage('MWS_PROACTIVE_ABONENT_DEAL_ID')
                )
            ),
            new DatetimeField(
                'DATE_CREATE',
                array(
                    'required'=>true,
                    'default_value'=>true,
                    'title'=>Loc::getMessage('MWS_PROACTIVE_ABONENT_DATE_CREATE')
                )
            ),
            (new Reference(
                'STATUS',
                AbonentStatusTable::class,
                Join::on('this.STATUS_ID', 'ref.ID')
            )),

        );

    }


}