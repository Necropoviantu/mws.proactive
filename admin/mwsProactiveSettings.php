<?php
global $APPLICATION;
require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_admin_before.php");
require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_admin_after.php");
$APPLICATION->SetTitle("Настройки клиента");
?>



    <link rel="icon" href="/local/modules/mws.proactive/admin/favicon.ico">

    <script defer="defer" src="/local/modules/mws.proactive/admin/js/chunk-vendors.6d610072.js"></script>
    <script defer="defer" src="/local/modules/mws.proactive/admin/js/app.22ee41f0.js"></script>
    <link href="/local/modules/mws.proactive/admin/css/chunk-vendors.02274daf.css" rel="stylesheet">
    <link href="/local/modules/mws.proactive/admin/css/app.b7b06670.css" rel="stylesheet">
</head>
<body>
<div id="app">

</body>
<?php
require($_SERVER["DOCUMENT_ROOT"] . BX_ROOT . "/modules/main/include/epilog_admin.php");
?>