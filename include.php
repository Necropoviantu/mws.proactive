<?php
\Bitrix\Main\Loader::registerAutoloadClasses(
    'mws.proactive',
    array(
        'Mywebstor\Proactive\MetricsTable' => 'lib/metricstable.php',
        'Mywebstor\Proactive\MetricsUnitTable' => 'lib/metricsunittable.php',
        'Mywebstor\Proactive\AbonentTable' => 'lib/abonenttable.php',
        'Mywebstor\Proactive\AbonentStatusTable' => 'lib/abonentstatustable.php',
    )
);