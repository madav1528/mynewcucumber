package stepdef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginaction {
	WebDriver driver=null;
	@Given("^the logic page is opened$")
	public void the_logic_page_is_opened() throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\training_b6b.01.16\\Desktop\\browersdrivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		driver.manage().window().maximize();
		driver.findElement(By.linkText("SignIn")).click();
	   
	}

	@Given("^user enters \"([^\"]*)\" as a username and \"([^\"]*)\" as a password$")
	public void user_enters_as_a_username_and_as_a_password(String arg1, String arg2) throws Throwable {
		driver.findElement(By.name("userName")).sendKeys("lalitha");
		driver.findElement(By.id("password")).sendKeys("Password123");
	  
	}

	@When("^user clicks on login Button$")
	public void user_clicks_on_login_Button() throws Throwable {
		driver.findElement(By.name("Login")).click();

	  
	}

	@Then("^user will Finds a testmeapp homepage$")
	public void user_will_Finds_a_testmeapp_homepage() throws Throwable {
		System.out.println("title of the page is"+driver.getTitle());
	    	}

}
