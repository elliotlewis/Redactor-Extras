<?php

namespace Craft;

class redactorExtrasPlugin extends BasePlugin
{
    function getName()
    {
         return Craft::t('Redactor Extras');
    }

    function getVersion()
    {
        return '1.1';
    }

    function getDeveloper()
    {
        return 'Elliot Lewis';
    }

    function getDeveloperUrl()
    {
        return 'http://elliotlewis.co.uk/craft';
    }

    public function getDocumentationUrl()
    {
        return 'https://github.com/elliotlewis/Redactor-Extras';
    }
    
    public function getSourceLanguage()
    {
        return 'en';
    }
    
    protected function defineSettings()
    {
        return array(
            'scriptButtons' => array(
                AttributeType::Bool, 'default' => false
            ),
            'counter' => array(
                AttributeType::Bool, 'default' => false
            ),
            'alignment' => array(
                AttributeType::Bool, 'default' => false
            ),
            'limiter' => array(
                AttributeType::Bool, 'default' => false
            ),
            'extraPluginJs'      => AttributeType::String,
            'extraPluginCss'      => AttributeType::String,
        );
    }
    
    public function getSettingsHtml()
    {
        return craft()->templates->render('redactorextras/_settings', array(
            'settings' => $this->getSettings()
        ));
    }
    
    public function init()
	{
		if (craft()->request->isCpRequest())
		{
            // Get settings
            $settings = $this->getSettings();

            if($settings->scriptButtons === "1")
            {
                craft()->templates->includeJsResource('redactorextras/plugins/scriptbuttons.js');
            }

            if($settings->counter === "1")
            {
                craft()->templates->includeJsResource('redactorextras/plugins/counter.js');
            }

            if($settings->alignment === "1")
            {
                craft()->templates->includeJsResource('redactorextras/plugins/alignment.js');
                craft()->templates->includeCssResource('redactorextras/plugins/alignment.css');
            }

            if($settings->limiter === "1")
            {
                craft()->templates->includeJsResource('redactorextras/plugins/limiter.js');
            }
            
            if($settings->extraPluginJs != "")
            {
                craft()->templates->includeJsFile($settings->extraPluginJs);
            }
            if($settings->extraPluginCss != "")
            {
                craft()->templates->includeCssFile($settings->extraPluginCss);
            }
		}
	}
}