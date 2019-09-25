$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/tagdemo.feature");
formatter.feature({
  "line": 3,
  "name": "ECommerce Application",
  "description": "",
  "id": "ecommerce-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Successful Login",
  "description": "",
  "id": "ecommerce-application;successful-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    },
    {
      "line": 7,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "UnSuccessful Login",
  "description": "",
  "id": "ecommerce-application;unsuccessful-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 25,
  "name": "Add a product to bag",
  "description": "",
  "id": "ecommerce-application;add-a-product-to-bag",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 31,
  "name": "Add multiple product to bag",
  "description": "",
  "id": "ecommerce-application;add-multiple-product-to-bag",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 39,
  "name": "Remove a product from bag",
  "description": "",
  "id": "ecommerce-application;remove-a-product-from-bag",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@SmokeTest"
    },
    {
      "line": 37,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 47,
  "name": "Remove all products from bag",
  "description": "",
  "id": "ecommerce-application;remove-all-products-from-bag",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 55,
  "name": "Increase product quantity from bag page",
  "description": "",
  "id": "ecommerce-application;increase-product-quantity-from-bag-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 61,
  "name": "Decrease product quantity from bag page",
  "description": "",
  "id": "ecommerce-application;decrease-product-quantity-from-bag-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 63,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 69,
  "name": "Buy a product with cash payment",
  "description": "",
  "id": "ecommerce-application;buy-a-product-with-cash-payment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@SmokeTest"
    },
    {
      "line": 67,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 77,
  "name": "Buy a product with CC payment",
  "description": "",
  "id": "ecommerce-application;buy-a-product-with-cc-payment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 75,
      "name": "@SmokeTest"
    },
    {
      "line": 75,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 85,
  "name": "Payment declined",
  "description": "",
  "id": "ecommerce-application;payment-declined",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 83,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 87,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.examples({
  "line": 89,
  "name": "",
  "description": "",
  "id": "ecommerce-application;payment-declined;",
  "rows": [
    {
      "cells": [
        "PaymentMethod"
      ],
      "line": 91,
      "id": "ecommerce-application;payment-declined;;1"
    },
    {
      "cells": [
        "CC Card"
      ],
      "line": 93,
      "id": "ecommerce-application;payment-declined;;2"
    },
    {
      "cells": [
        "DD Card"
      ],
      "line": 95,
      "id": "ecommerce-application;payment-declined;;3"
    },
    {
      "cells": [
        "Bank Transfer"
      ],
      "line": 97,
      "id": "ecommerce-application;payment-declined;;4"
    },
    {
      "cells": [
        "PayPal"
      ],
      "line": 99,
      "id": "ecommerce-application;payment-declined;;5"
    },
    {
      "cells": [
        "Cash"
      ],
      "line": 101,
      "id": "ecommerce-application;payment-declined;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 93,
  "name": "Payment declined",
  "description": "",
  "id": "ecommerce-application;payment-declined;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 83,
      "name": "@End2End"
    },
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 87,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 95,
  "name": "Payment declined",
  "description": "",
  "id": "ecommerce-application;payment-declined;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 83,
      "name": "@End2End"
    },
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 87,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 97,
  "name": "Payment declined",
  "description": "",
  "id": "ecommerce-application;payment-declined;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 83,
      "name": "@End2End"
    },
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 87,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 99,
  "name": "Payment declined",
  "description": "",
  "id": "ecommerce-application;payment-declined;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 83,
      "name": "@End2End"
    },
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 87,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 101,
  "name": "Payment declined",
  "description": "",
  "id": "ecommerce-application;payment-declined;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 83,
      "name": "@End2End"
    },
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 87,
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});