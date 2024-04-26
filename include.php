<?php
\Bitrix\Main\Loader::registerAutoloadClasses(
    'mws.proactive',
    array(
        "MwsProactiveRest" => "classes/restservice.php",
        'Mywebstor\Proactive\MetricsTable' => 'lib/metricstable.php',
        'Mywebstor\Proactive\MetricsUnitTable' => 'lib/metricsunittable.php',
        'Mywebstor\Proactive\AbonentTable' => 'lib/abonenttable.php',
        'Mywebstor\Proactive\AbonentStatusTable' => 'lib/abonentstatustable.php',
        'Mywebstor\Proactive\SettingsTable' => 'lib/settingstable.php',
        'Mywebstor\Proactive\IpCheckTable' => 'lib/ipchecktable.php',
    )
);
