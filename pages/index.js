import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css" media="screen">

    <!-- Favicons -->
    <!-- Change the favicon.png file to the image you wish to use as the favicon -->
    <link rel="icon" type="image/png" href="asset/favicon.png" sizes="16x16">
    <link rel="icon" type="image/png" href="asset/favicon.png" sizes="32x32">
    <link rel="icon" type="image/png" href="asset/favicon.png" sizes="96x96">
    <link rel="apple-touch-icon" sizes="72x72" href="asset/favicon.png">
    <link rel="apple-touch-icon" sizes="114x114" href="asset/favicon.png">
    <link rel="apple-touch-icon" sizes="152x152" href="asset/favicon.png">

    <!-- Bootstrap JS | JQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>

    <!-- SEO tools -->
    <title>Universal Website</title>
    <meta name="description" content="Discord bot">
    <meta name="keywords" content="Discord bot">
    <!--Add additional SEO meta data here!-->

    <!-- Open Graph tags -->
    <meta property="og:title" content="Universal">
    <meta property="og:url" content="www.UniversalBot,com">
    <meta property="og:image" content="https://cdn.discordapp.com/icons/919347699013271622/55db361750cd8d59774a4c345b18cb71.png">
    <meta property="og:type" content="website">
    <meta property="og:description" content="Basic and simple bot website for your autocode creations!">

  </head>
  <body class="bg-dark">
    
    <nav class="navbar navbar-expand-md bg-discord navbar-dark">
        <div class="container">
            <!-- Bot/Brand Name -->
            <a class="navbar-brand" href="index.html"><b>Universal Bot website</b></a>
        
            <!-- Bootstrap Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <!-- This link invites Spectre, Change the client id to your bot's id -->
                    <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://discord.com/oauth2/authorize?client_id=914047129415221290&amp;scope=identify%20bot%20applications.commands&amp;permissions=2146958591">Invite to Server</a>
                    </li>
                    <!-- Change link to your support server link -->
                    <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://discord.gg/7BH9TkYVBq">Support Server</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="commands.html">Commands</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="update-logs.html">Update Logs</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container container-1">
        <div class="row">
            <h1 class="brand-line" style="color:00718b;"><b>Universal Bot</b></h1>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div class="card bg-grey" style="background-color:DodgerBlue;">
                    <div class="card-body">
                      <img class="card-img-top" src="asset/image1.png" alt="Bot Invite" style="width:100%">
                      <h4 class="card-title big-text" >Invite Bot</h4>
                      <p class="card-text">Invite the greatest bot in the game and level up your server!</p>
                      <!-- This link invites Spectre, Change the client id to your bot's id -->
                      <a href="https://discord.com/oauth2/authorize?client_id=914047129415221290&amp;scope=identify%20bot%20applications.commands&amp;permissions=2146958591" class="btn btn-discord btn-block stretched-link" style="background-color:00718b;" >Invite Bot</a>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div class="card bg-blue" style="background-color:DodgerBlue;">
                    <div class="card-body">
                      <img class="card-img-top" src="asset/image2.png" alt="Support Server" style="width:100%">
                      <h4 class="card-title big-text">Support Server</h4>
                      <p class="card-text">Join our support server for help setting up the bot and to report bugs...</p>
                      <!-- Change link to your support server link -->
                      <a href="https://discord.gg/7BH9TkYVBq" class="btn btn-discord btn-block stretched-link" style="background-color:00718b;">Join our Support Server</a>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div class="card bg-grey" style="background-color:DodgerBlue;">
                    <div class="card-body">
                      <img class="card-img-top" src="asset/image3.png" alt="Commands" style="width:100%">
                      <h4 class="card-title big-text">Bot Commands</h4>
                      <p class="card-text">View a full list of Commands for Spectre bot on our command list page!</p>
                      <a href="commands.html" class="btn btn-discord btn-block stretched-link" style="background-color:00718b;">View Commands</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <h1 class="brand-line"><b>Featured News:</b></h1>
        </div>
        <!-- Update these with your bot's News -->
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div class="card bg-grey" style="background-color:DodgerBlue;">
                    <div class="card-body">
                      <h4 class="card-title big-text">Bot Updates</h4>
                      <p class="card-text">View the latest Update Logs here...</p>
                      <a href="updatelogs.html" class="btn btn-discord btn-block stretched-link" style="background-color:00718b;">Update Logs</a>
                    </div>
                </div>
            </div>
        </div>

    <nav class="navbar navbar-expand-md bg-discord navbar-dark justify-content-center">
        <div class="container">
            <!-- Bot/Brand Name -->
            <a class="navbar-brand" href=""><b>© 2021 | Universal</b></a>
        </div>
    </nav>

  
</div></body>
  )
}
