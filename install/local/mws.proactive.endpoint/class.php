<?php


if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

class mwsProactiveEndpoint extends CBitrixComponent
{
    const STATUS_OK = "200 OK";
    const STATUS_CREATED = "201 Created";
    const STATUS_WRONG_REQUEST = "400 Bad Request ";
    const STATUS_UNAUTHORIZED = "401 Unauthorized";
    const STATUS_PAYMENT_REQUIRED = "402 Payment Required";
    const STATUS_FORBIDDEN = "403 Forbidden";
    const STATUS_NOT_FOUND = "404 Not Found";
    const STATUS_TO_MANY_REQUESTS = "429 Too Many Requests";
    const STATUS_INTERNAL = "500 Internal Server Error";

    protected $token = null;
    /** @var \Bitrix\Main\HttpResponse $response */
    protected $response = null;
    protected $command = null;
    protected static $entities = array(
        "Metric",
        "Accident",
    );
    public function executeComponent()
    {
        set_time_limit(-1);
        ini_set("memory_limit", -1);
        $this->init();
        //$this->checkToken();

        $content = "";
        switch ($this->command) {
            case "integrate":
            case null:
            case "":
                $result = $this->integrate();
                $content = \Bitrix\Main\Web\Json::encode($result);
                break;
            default:
                $this->showError("Unknown command \"{$this->command}\"");
                break;
        }
        $this->response
            ->setContent($content)
            ->setStatus(self::STATUS_OK);

        $this->end();
    }
    protected function init()
    {
        /**
         * @var \CMain $APPLICATION
         * @var \CUser $USER
         * @var \CDatabase $DB
         */
        global $APPLICATION, $USER, $DB;
        $APPLICATION->RestartBuffer();

        $this->response = Application::getInstance()
            ->getContext()
            ->getResponse();
        $this->response
            ->getHeaders()
            ->set(
                "Content-Type",
                "application/json"
            );


    }


    protected function checkToken()
    {
        $this->token = unserialize(COption::GetOptionString("mws.proactive", "mws_proactive_integration_token", "a:0:{}"));
        if (!$this->token || strlen($this->token) !== 128)
            $this->showError("Access token is corrupted. Update it in Bitrix admin panel", self::STATUS_INTERNAL);

        $requestToken = $this->request->getHeader("Bitrix-Mws-Proactive-Integration-Token");

        if (!$requestToken || $requestToken != $this->token)
            $this->showError("Authorization error", self::STATUS_UNAUTHORIZED);

        $command = $this->request->getHeader("Bitrix-Mws-Proactive-Integration-Command");
        if (isset($command) && !empty($command))
            $this->command = $command;
    }
    protected function integrate()
    {
        if ($this->request->getJsonList()->isEmpty())
            $this->showError("Incorrect or empty JSON");

        $result = array(
            "status" => "success"
        );

        $request = $this->request->getJsonList()->toArray();

        foreach (static::$entities as $entity) {
            if (!array_key_exists($entity, $request)) continue;

            $data = $this->{"set" . $entity}($request[$entity]);
            if (!isset($data) || empty($data))
                $data = array(
                    "status" => "success"
                );

            $result[$entity] = $data;
        }

        return $result;
    }

    protected function setMetric($metrics){

    }
    protected function setAccident($accidents){


    }




    protected function end()
    {
        Application::getInstance()->end();
    }


}