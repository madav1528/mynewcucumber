package stepdef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class moreuser {
	WebDriver driver=null;
	@Given("^Login Page is opened$")
	public void login_Page_is_opened() throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\training_b6b.01.16\\Desktop\\browersdrivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		driver.manage().window().maximize();
		driver.findElement(By.linkText("SignIn")).click();
	    //driver.manage().timeouts().implicitlyWait(20, TimeUint.SECONDS);
		driver.findElement(By.xpath("//a[@href='logout.htm']")).click();
		driver.close();
		
		
	    
	}

	@When("^user enters \"([^\"]*)\" as a username and \"([^\"]*)\" as a password$")
	public void user_enters_as_username_as_password(String username, String password) {
		driver.findElement(By.name("userName")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
		driver.findElement(By.name("Login")).click();

	}

	

	@Then("^message displayed login succesfully$")
	public void message_displayed_login_succesfully() throws Throwable {
		System.out.println("title of the page is"+driver.getTitle());
	   
	}

}
