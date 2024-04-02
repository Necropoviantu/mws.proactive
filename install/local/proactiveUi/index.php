<head>
<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');
$request = \Bitrix\Main\Application::getInstance()->getContext()->getRequest()->getValues();
CModule::IncludeModule('crm');
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
?>
 
 
 <script src="//api.bitrix24.com/api/v1/"></script>





    <link href="/local/proactiveUi/css/chunk-vendors.4c3c74a2.css" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
    <script defer="defer" src="/local/proactiveUi/js/chunk-vendors.bd44cdc4.js"></script>
    <script defer="defer" src="/local/proactiveUi/js/app.30de58f7.js"></script>
</body>

<?
require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/epilog_after.php');
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php');



