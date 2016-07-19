# LIVELOADER
  A simple jquery for page preloader.
  
## Features
  - Light weight font icon.
  - Multiple Custom options. 
  - Display your own image as loader.
  - Easy to use.  

## Installation
1. ADD CSS
	```    
		<!-- font-awesome -->
		<link href="css/font-awesome.css" rel="stylesheet" type="text/css"/>        
		<!-- pageloader -->
		<link href="css/pageloader.css" rel="stylesheet" type="text/css"/> 	
   ```
   
2. ADD JS
	```
		<!-- Jquery 2.1.4 -->
		<script src="js/jquery.js" type="text/javascript"></script>         
		<!-- Live Loader -->
		<script src="js/liveloader.js" type="text/javascript"></script>  	
	```
3. HTML
   
    ```
    <div id="pageloader">
        <div id="loadercontent"></div>
	</div> 
   ```
    
4. Initialize Loader

	 ```
    <script>        
        $('#pageloader').liveloader({            
            bgcolor: '#000000',
            bordercolor: '#ED2437',                        
            color:'#ED2437',
            faspeed:'slow',     
            fafont:'spinner',
            faeffect:'spin',
            fasize:'fa-4x'
			/*imgurl:'loading.gif'*/
        });        
    </script>
   ```
   
5. Finish


## Demo
http://plugins.auratechmind.net/liveloader/

## Discussion
http://auratechmind.net/question/category/liveloader/

## Credit
http://fontawesome.io/


