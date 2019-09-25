package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features//cucum11.feature", glue={"stepdef"},plugin= {"html:target/cucumber.html"})

public class runnerclass {

}
