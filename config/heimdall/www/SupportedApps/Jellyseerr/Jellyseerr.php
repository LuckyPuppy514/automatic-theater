<?php namespace App\SupportedApps\Jellyseerr;

class Jellyseerr extends \App\SupportedApps implements \App\EnhancedApps {

    public $config;

    //protected $login_first = true; // Uncomment if api requests need to be authed first
    //protected $method = 'POST';  // Uncomment if requests to the API should be set by POST

    function __construct() {
        //$this->jar = new \GuzzleHttp\Cookie\CookieJar; // Uncomment if cookies need to be set
    }

    public function test()
    {
        $this->attrs["headers"] = [
			"accept" => "application/json",
			"X-Api-Key" => $this->config->apikey,
		];

		$test = parent::appTest($this->url("auth/me"), $this->attrs);

		echo $test->status;
    }

    public function livestats()
    {
		$status = "inactive";
		$data = [];
		$this->attrs["headers"] = [
			"accept" => "application/json",
			"X-Api-Key" => $this->config->apikey,
		];

        $pendingRequestsCount = json_decode(
			parent::execute($this->url("request/count"), $this->attrs)->getBody()
		);

		$pendingIssueCount = json_decode(
			parent::execute($this->url("issue/count"), $this->attrs)->getBody()
		);

        if ($pendingRequestsCount || $pendingIssueCount) 
        {
			$data["requests"] = $pendingRequestsCount->pending ?? 0;
			$data["issues"] = $pendingIssueCount->open ?? 0;
		}

        return parent::getLiveStats($status, $data);
    }

    public function url($endpoint)
    {
        $api_url =
			parent::normaliseurl($this->config->url) .
			"api/v1/" .
			$endpoint;

		return $api_url;
    }
}
