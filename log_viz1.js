// http://www.graphviz.org/content/cluster

digraph G {

    subgraph cluster_main{
    style=filled;
    color=lightgrey;
    node [style=filled,color=white];
        label = "referer";
        "google.co.jp"; "webfood.info"; "direct";
    }
    
    subgraph cluster_info{
        node [style=filled]
        "/privacypolicy";"/term";"/warning";"/teaching";
        style=filled;
        color=hotpink1;
        label="info_page";
    }

  subgraph cluster_mugcup{
      node [style=filled];
      "/mugcups"; "/mugcups/0"; "/mugcups/1"; "/mugcups/2"; "/mugcups/3"; "/mugcups/4"; "/mugcups/5"; "/mugcups/6"; "/mugcups/7"; "/mugcups/8"; "/mugcups/9"; "/mugcups/10"; "/mugcups/11";
      label = "mugcups";
      style=filled;
      color=dodgerblue;
  }
  
  subgraph cluster_coffee_cup{
      node [style=filled];
      "/coffee_cups"; "/coffee_cups/1"; "/coffee_cups/2"; "/coffee_cups/3"; "/coffee_cups/4";
      "/coffee_cups/5"; "/coffee_cups/6"; "/coffee_cups/7"; "/coffee_cups/8";
      label = "coffee_cups";
      style=filled;
      color = firebrick1;
  }
  
  subgraph cluster_code{
      node [style=filled];
      "/codes"; "/codes/4"; "/codes/5"; "/codes/6"; "/codes/7"; "/codes/8"; "/codes/9"; "/codes/10"; "/codes/11";
      "/codes/c_1"; "/codes/c_2";"/codes/c_3";"/codes/c_4";"/codes/c_5";"/codes/c_7";
      label = "codes"
      style=filled;
      color=limegreen;
  }
  
  subgraph cluster_setting{
      node [style=filled]
      "/mugcups/how_to_save"; "/mugcups/how_to_open";"/mugcups/html_tags";"/mugcups/css";
      "/mugcups/windows_rails";"/mugcups/windows_tips";"/mugcups/heroku";
      label = "settings";
      style=filled;
      color=khaki1;
  }

  "google.co.jp" -> "/";
  "webfood.info" -> "/";
  "/teaching"->"/"
  "webfood.info" -> "/";
    "/"->"/mugcups"
    "/mugcups"->"/mugcups"
    "/mugcups"->"/mugcups/0"
    "/mugcups/0"->"/mugcups/1"
    "/mugcups/1"->"/mugcups/2"
    "/mugcups/2"->"/mugcups/3"
    "/mugcups/3"->"/mugcups/html_tags"
    "/mugcups/3"->"/mugcups/css"
    "/mugcups/3"->"/mugcups/html_tags"
    "/"->"/mugcups"
    "/mugcups/3"->"/mugcups/4"
    "/"->"/codes"
    "/mugcups/4"->"/mugcups/4"
    "/mugcups/4"->"/mugcups/4"
    "/mugcups/4"->"/mugcups/5"
    "/"->"/mugcups"
    "/mugcups/5"->"/codes/5"
    "/mugcups/5"->"/codes/5"
    "/mugcups"->"/mugcups/4"
    "/mugcups/5"->"/codes/5"
    "/mugcups/5"->"/mugcups/6"
    "/"->"/codes"
    "/codes"->"/codes/5"
    "/"->"/mugcups"
    "/mugcups/6"->"/mugcups/4"
    "/mugcups/6"->"/mugcups/6"
    "/mugcups/6"->"/codes/6"
    "/mugcups/6"->"/mugcups/7"
    "/mugcups"->"/mugcups/7"
    "/mugcups"->"/mugcups/8"
    "/"->"/mugcups"
    "/"->"/mugcups/7"
    "/mugcups/7"->"/mugcups/8"
    "/mugcups/8"->"/mugcups/6"
    "/mugcups/8"->"/mugcups/9"
    "/"->"/coffee_cups"
    "/coffee_cups"->"/coffee_cups/8"
    "/"->"/mugcups"
    "/mugcups"->"/mugcups/11"
    "/"->"/privacypolicy"
    "/mugcups/9"->"/mugcups/4"
    "/mugcups/9"->"/mugcups/10"
    "/mugcups/10"->"/mugcups/11"
    "/mugcups/11"->"/coffee_cups/8"
    "/mugcups/11"->"/mugcups/heroku"
    "direct"->"/mugcups/10"
    "/mugcups/11"->"/mugcups/11"
    "/mugcups/10"->"/mugcups/11"
    "/mugcups/11"->"/mugcups/4"
    "/mugcups/11"->"/coffee_cups"
    "/coffee_cups"->"/coffee_cups/1"
    "/coffee_cups/1"->"/coffee_cups"
    "/coffee_cups"->"/coffee_cups/1"
    "/coffee_cups/1"->"/mugcups/how_to_open"
    "/coffee_cups/1"->"/codes/c_1"
    "/coffee_cups/1"->"/mugcups"
    "/coffee_cups/1"->"/codes"
    "/codes"->"/codes/4"
    "/codes"->"/codes/5"
    "/codes"->"/codes/6"
    "/codes/6"->"/mugcups"
    "/mugcups"->"/mugcups/7"
    "/mugcups/7"->"/"
    "/"->"/mugcups"
    "/mugcups"->"/codes"
    "/codes"->"/codes/5"
    "/codes"->"/codes/4"
    "/codes"->"/mugcups/how_to_save"
    "/codes"->"/mugcups/heroku"
    "/codes"->"/mugcups/how_to_save"
    "/codes"->"/mugcups/html_tags"
    "/coffee_cups/1"->"/mugcups"
    "/mugcups"->"/mugcups/2"
    "/mugcups/2"->"/coffee_cups"
    "/coffee_cups/1"->"/mugcups"
    "/mugcups"->"/mugcups/1"
    "/mugcups"->"/mugcups/3"
    "/mugcups"->"/mugcups/4"
    "/mugcups"->"/mugcups/3"
    "/mugcups/11"->"/coffee_cups/1"
    "/coffee_cups/1"->"/coffee_cups"
    "/coffee_cups"->"/coffee_cups/1"
}
