<?php
defined('B_PROLOG_INCLUDED') and (B_PROLOG_INCLUDED === true) or die();

use Bitrix\Main\Localization\Loc;

Loc::loadLanguageFile(__FILE__);

$aMenu = array(
    'parent_menu' => 'global_menu_settings',
    'sort' => 150,
    'text' => Loc::getMessage('MWS_1C_MODULE_MENU'),
    'title' => Loc::getMessage('MWS_1C_MODULE_MENU_TITLE'),
    'icon' => 'sale_menu_icon_statistic',
    'page_icon' => 'sale_menu_icon_statistic',
    'items_id' => 'menu_mws.1c.integration',
    'items' => array(
        array(
//            'text' => Loc::getMessage('MWS_1C_MODULE_MENU_TITLE'),
//            'title' => Loc::getMessage('MWS_1C_MODULE_MENU_TITLE'),
            'text' => 'dev',
            'title' => 'dev settings',
            'url' => '/bitrix/admin/mwsProactiveSettings.php?lang=' . LANGUAGE_ID,
        ),
    )

);


return  $aMenu;