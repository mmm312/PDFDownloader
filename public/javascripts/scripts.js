var app = angular.module("PDFDownloader", []);
app.controller("PDFDownloaderCtrl", function ($scope)
{

});
app.run([
    '$rootScope', function ($scope)
    {

        $scope.myFunction = function ()
        {
            var url = $("#user_entry").val();
             //   document.getElementById("fname").innerText;
            //var last = $("#lname").val();
                //document.getElementById("lname").innerText;
            document.getElementById("para").innerText = url;

            var index = url.indexOf("github.com/") + 11;
            var substr = url.substring(index, url.length);
            //substr += "/archive/master.zip";
            console.log(substr);
            $.get('/link/'+substr, function(data, status){
                console.log(data, status);
            })
        };
    }


])

