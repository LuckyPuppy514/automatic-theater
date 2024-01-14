<?php namespace App\SupportedApps\Prowlarr;

class Prowlarr extends \App\SupportedApps implements \App\EnhancedApps
{
	public $config;

	//protected $login_first = true; // Uncomment if api requests need to be authed first
	//protected $method = 'POST';  // Uncomment if requests to the API should be set by POST

	function __construct()
	{
		//$this->jar = new \GuzzleHttp\Cookie\CookieJar; // Uncomment if cookies need to be set
	}

	public function test()
	{
		$test = parent::appTest($this->url("system/status"));
		echo $test->status;
	}

	public function livestats()
	{
		$status = "inactive";

		$indexers = json_decode(
			parent::execute($this->url("indexer"))->getBody()
		);
		$failures = json_decode(
			parent::execute($this->url("indexerstatus"))->getBody()
		);

		$collect = collect($indexers);
		$enabled = $collect->where("enable", true);

		$data = [];
		if ($indexers || $failures) {
			$data["enabled_count"] = $enabled->count() ?? 0;
			$data["indexer_count"] = count($indexers) ?? 0;
			$data["failure_count"] = count($failures) ?? 0;
		}

		return parent::getLiveStats($status, $data);
	}
	public function url($endpoint)
	{
		$api_url =
			parent::normaliseurl($this->config->url) .
			"api/v1/" .
			$endpoint .
			"?apikey=" .
			$this->config->apikey;
		return $api_url;
	}
}
