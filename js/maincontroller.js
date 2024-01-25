app.controller("MainController", function($scope){
    $scope.szoveg = "angular valtozo";

    $scope.emberek = [
        {nev: "JohnPork", eletkor: "130", harem: ["bridget", "agnes"]},
        {nev: "Lucifer", eletkor: "1000", harem: ["detective", "milliok"]},
        {nev: "Ragnar", eletkor: "40", harem: ["lagherta", "Aslaug"]},
        {nev: "Bulgasal", eletkor: "2000", harem: ["Min Si-ho"]}
    ]
});