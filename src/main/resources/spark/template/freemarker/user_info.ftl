<!DOCTYPE html>
<html>
<head>
  <#include "header.ftl">
</head>

<body>

  <#include "nav.ftl">

<div class="container">

  <h1>email informaiton</h1>
    <ul>
    <#list results as x>
    <#if x.user_email=="jiz124@pitt.edu">
      <li style="color: red"> ${x} </li>
      <#else><li> ${x} </li>
      </#if>
    </#list>
    </ul>

</div>

</body>
</html>
