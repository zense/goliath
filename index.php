<?php require '../wp-load.php';  ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Dashboard | Goliath | </title>
    <link rel="stylesheet" href="static/main.css">
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <script type="text/javascript">
      window.WP_API_Settings = {
      endpoint: '<?php echo site_url(); ?>/index.php/wp-json'
    }
    </script>
  </body>
</html>
