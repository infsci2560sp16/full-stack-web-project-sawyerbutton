import com.google.gson.Gson;

import java.sql.*;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Map;
import org.json.JSONObject;

import java.net.URI;
import java.net.URISyntaxException;

import static spark.Spark.*;
import spark.template.freemarker.FreeMarkerEngine;
import spark.ModelAndView;
import static spark.Spark.get;

import static javax.measure.unit.SI.KILOGRAM;
import javax.measure.quantity.Mass;
import org.jscience.physics.model.RelativisticModel;
import org.jscience.physics.amount.Amount;

import static javax.measure.unit.SI.KILOGRAM;
import javax.measure.quantity.Mass;
import org.jscience.physics.model.RelativisticModel;
import org.jscience.physics.amount.Amount;

import com.heroku.sdk.jdbc.DatabaseUrl;


public class Main {
  
  public static void main(String[] args) {

     Gson gson = new Gson();

    port(Integer.valueOf(System.getenv("PORT")));
    staticFileLocation("/public");

    get("/hello", (req, res) -> "Hello World");


    get("/db", (req, res) -> {
      Connection connection = null;
      Map<String, Object> attributes = new HashMap<>();
      try {
        connection = DatabaseUrl.extract().getConnection();

        Statement stmt = connection.createStatement();
        stmt.executeUpdate("CREATE TABLE IF NOT EXISTS ticks (tick timestamp)");
        stmt.executeUpdate("INSERT INTO ticks VALUES (now())");
        ResultSet rs = stmt.executeQuery("SELECT tick FROM ticks");

        ArrayList<String> output = new ArrayList<String>();
        while (rs.next()) {
          output.add( "Read from DB: " + rs.getTimestamp("tick"));
        }

        attributes.put("results", output);
        return new ModelAndView(attributes, "db.ftl");
      } catch (Exception e) {
        attributes.put("message", "There was an error: " + e);
        return new ModelAndView(attributes, "error.ftl");
      } finally {
        if (connection != null) try{connection.close();} catch(SQLException e){}
      }
    }, new FreeMarkerEngine());

    get("/user_info", (req, res) ->
    {
      Connection connection = null;
      Map<String, Object> attributes = new HashMap<>();
      try{
      connection = DatabaseUrl.extract().getConnection();

      Statement stmt = connection.createStatement();

      stmt.executeUpdate("CREATE TABLE IF NOT EXISTS user_info (user_email varchar(100),  user_password  varchar(30),  user_name  varchar(30) )");
     stmt.executeUpdate("INSERT INTO user_info VALUES ('jiz124@pitt.edu','123213','jiezhang')");
     stmt.executeUpdate("INSERT INTO user_info VALUES ('qil45@pitt.edu','565465','qiangli')");


      ResultSet rs = stmt.executeQuery("SELECT user_email, user_password FROM user_info");
      ArrayList<String> output = new ArrayList<String>();

    while(rs.next())
    {

       output.add("read user " + "email: " + rs.getString("user_email") + "     password: " + rs.getString("user_password") );

     }
    attributes.put("results",output);
     return new ModelAndView(attributes, "user_info.ftl");
     } catch (Exception e) {
     attributes.put("message", "There was an error: " + e);
     return new ModelAndView(attributes, "error.ftl");
     } finally {
     if (connection != null) try{connection.close();} catch(SQLException e){}
    }}, new FreeMarkerEngine());



    post("/adduser",(req,res)->

      {

        Connection connection = null;
        Map<String, Object> attributes = new HashMap<>();
        try{
        connection = DatabaseUrl.extract().getConnection();

        JSONObject obj = new JSONObject(req.body());


        String email = obj.getString("signup-email");
        String password = obj.getString("signup-password");
       Statement stmt = connection.createStatement();
       stmt.executeUpdate("CREATE TABLE IF NOT EXISTS user_info (user_email varchar(100),  user_password  varchar(30),  user_name  varchar(30) )");
       stmt.executeUpdate("INSERT INTO user_info(user_email, user_password, user_name)" +
                "VALUES('" + email + "', '" + password + "', 'null')");
       return req.body();
       } catch (Exception e) {
         System.err.println("Exception: "+ e);
          return e.getMessage();
       } finally {
        if (connection != null) try{connection.close();} catch(SQLException e){}
      }});



/*
            get("/user", (req, res) -> {
              ArrayList<String> users = new ArrayList<String>();
              users.add("John Doe");
              users.add("Tony Doe");
              users.add("test one");

              Map<String, Object> attributes = new HashMap<>();
              attributes.put("users", users);


               return new ModelAndView(attributes, "user.ftl");
            }, new FreeMarkerEngine());
*/

            get("/api/timeline_info", (req, res) -> {
                    Map<String, Object> data = new HashMap<>();
                    data.put("Productname","Air Froce 1");
                    data.put("January", "100");
                    data.put("Febuary", "200");
                    data.put("March", "300");
                    return data;
                }, gson::toJson);


                get("/recommendation", (req, res) -> {
                  ArrayList<String> users = new ArrayList<String>();
                  users.add("John Doe");
                  users.add("Smith");
                  users.add("Daniel");
                  users.add("Mark");
                  users.add("Ellen");
                  users.add("Lily");
                  users.add("Julio");
                  users.add("Chela");
                  users.add("Bells");


                  ArrayList<String> images = new ArrayList<String>();
                  images.add("picture/image1.jpg");
                  images.add("picture/image2.jpg");
                  images.add("picture/image3.jpg");
                  images.add("picture/image4.jpg");
                  images.add("picture/image5.jpg");
                  images.add("picture/image6.jpg");
                  images.add("picture/image7.jpg");
                  images.add("picture/image8.jpg");
                  images.add("picture/image9.jpg");


                  Map<String, Object> attributes = new HashMap<>();
                  attributes.put("users", users);
                  attributes.put("images", images);



                   return new ModelAndView(attributes, "recommendation.ftl");
                  }, new FreeMarkerEngine());


                    get("/api/info", (req, res ) ->
                    {
                      Map<String, Object> data = new HashMap<>();
                      data.put("username","Smith");
                      String xml= "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
                                  "<customer>"+
                                  "<user_profile>" +
                                          "<ProductName>Air Froce 1</ProductName>"+
                                          "<January>100</January>"+
                                          "<Febuary>200</Febuary>"+
                                          "<March>300</March>"+
                                  "</user_profile>"+
                                  "<user_profile>" +
                                          "<ProductName>KOBE XI</ProductName>"+
                                          "<January>312</January>"+
                                          "<Febuary>1333</Febuary>"+
                                          "<March>433</March>"+
                                  "</user_profile>"+
                                  "<user_profile>" +
                                          "<ProductName>Lebron XIII</ProductName>"+
                                          "<January>4324</January>"+
                                          "<Febuary>41</Febuary>"+
                                          "<March>5454</March>"+
                                  "</user_profile>"+
                                  "</customer>";
                      res.type("text/xml");
                      return xml;
                    });



}
}
