package pageapplicationmodel;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestcasePOM {
	public static void main(String[] args) {
		
	System.setProperty("webdriver.chrome.driver","C:\\Users\\training_b6b.01.16\\Desktop\\browersdrivers\\chromedriver.exe");
	WebDriver driver = new ChromeDriver();
	pageclass PObject=new pageclass(driver);
	
	driver.get("http://demowebshop.tricentis.com/");
	driver.manage().window().maximize();
	PObject.clicklink();
	String username=null;
	PObject.typeuname(username);
	String password=null;
	PObject.typepassword(password);
	PObject.clickloginlyn();
	PObject.clickloginlynk();
	System.out.println("title of the page is "+driver.getTitle());
	

}
}

