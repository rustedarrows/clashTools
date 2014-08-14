'use strict';

angular.module('clash.calc').controller('CalculatorController', ['$scope',
    function($scope) {
        $scope.Math = window.Math;

        $scope.towers = [];
        $scope.tower = [];

        $scope.townHallLevel = 0;
        $scope.builders = 2;

        $scope.player = {
            townHall: 1,
            goldMine: [],
            elixirPump: [],
            darkElixirDrill: [],
            goldStorage: [],
            elixirStorage: [],
            darkElixirStorage: [],
            darkBarracks: [],
            barracks: [],
            armyCamps: [],
            laboratory: [],
            spellFactory: [],
            clanCastle: [],
            cannon: [],
            archerTower: [],
            walls: [],
            mortar: [],
            bomb: [],
            airDefense: [],
            springTrap: [],
            wizardTower: [],
            giantBomb: [],
            airBomb: [],
            airMine: [],
            tesla: [],
            xbow: [],
            inferno: []
        };

        $scope.setTownHall = function(th) {
            $scope.townHallLevel = th;
            $scope.updatePlayer();
        };

        $scope.setBuilders = function(b) {
            $scope.builders = b;
        };

        $scope.timeLeftMax = function() {
            var elixir = 0;
            var gold = 0;
            var time = 0;
            var i = 0;
            var j = 0;

            if($scope.player.goldMine.length !== 0) {
                for(i = 0; i < $scope.player.goldMine.length; i++) {
                    for(j = $scope.player.goldMine[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.goldMine.level; j++) {
                        time += $scope.goldMine.levels[j].build;
                        elixir += $scope.goldMine.levels[j].cost;
                    }
                }
            }
            if($scope.player.elixirPump.length !== 0) {
                for(i = 0; i < $scope.player.elixirPump.length; i++) {
                    for(j = $scope.player.elixirPump[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.elixirPump.level; j++) {
                        time += $scope.elixirPump.levels[j].build;
                        gold += $scope.elixirPump.levels[j].cost;
                    }
                }
            }
            if($scope.player.darkElixirDrill.length !== 0) {
                for(i = 0; i < $scope.player.darkElixirDrill.length; i++) {
                    for(j = $scope.player.darkElixirDrill[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.darkElixirDrill.level; j++) {
                        time += $scope.darkElixirDrill.levels[j].build;
                        elixir += $scope.darkElixirDrill.levels[j].cost;
                    }
                }
            }
            if($scope.player.goldStorage.length !== 0) {
                for(i = 0; i < $scope.player.goldStorage.length; i++) {
                    for(j = $scope.player.goldStorage[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.goldStorage.level; j++) {
                        time += $scope.goldStorage.levels[j].build;
                        elixir += $scope.goldStorage.levels[j].cost;
                    }
                }
            }
            if($scope.player.elixirStorage.length !== 0) {
                for(i = 0; i < $scope.player.elixirStorage.length; i++) {
                    for(j = $scope.player.elixirStorage[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.elixirStorage.level; j++) {
                        time += $scope.elixirStorage.levels[j].build;
                        gold += $scope.elixirStorage.levels[j].cost;
                    }
                }
            }
            if($scope.player.darkElixirStorage.length !== 0) {
                for(i = 0; i < $scope.player.darkElixirStorage.length; i++) {
                    for(j = $scope.player.darkElixirStorage[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.darkElixirStorage.level; j++) {
                        time += $scope.darkElixirStorage.levels[j].build;
                        elixir += $scope.darkElixirStorage.levels[j].cost;
                    }
                }
            }
            if($scope.player.darkBarracks.length !== 0) {
                for(i = 0; i < $scope.player.darkBarracks.length; i++) {
                    for(j = $scope.player.darkBarracks[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.darkBarracks.level; j++) {
                        time += $scope.darkBarracks.levels[j].build;
                        elixir += $scope.darkBarracks.levels[j].cost;
                    }
                }
            }
            if($scope.player.barracks.length !== 0) {
                for(i = 0; i < $scope.player.barracks.length; i++) {
                    for(j = $scope.player.barracks[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.barracks.level; j++) {
                        time += $scope.barracks.levels[j].build;
                        elixir += $scope.barracks.levels[j].cost;
                    }
                }
            }
            if($scope.player.armyCamps.length !== 0) {
                for(i = 0; i < $scope.player.armyCamps.length; i++) {
                    for(j = $scope.player.armyCamps[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.armyCamps.level; j++) {
                        time += $scope.armyCamp.levels[j].build;
                        elixir += $scope.armyCamp.levels[j].cost;
                    }
                }
            }
            if($scope.player.laboratory.length !== 0) {
                for(i = 0; i < $scope.player.laboratory.length; i++) {
                    for(j = $scope.player.laboratory[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.laboratory.level; j++) {
                        time += $scope.laboratory.levels[j].build;
                        elixir += $scope.laboratory.levels[j].cost;
                    }
                }
            }
            if($scope.player.spellFactory.length !== 0) {
                for(i = 0; i < $scope.player.spellFactory.length; i++) {
                    for(j = $scope.player.spellFactory[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.spellFactory.level; j++) {
                        time += $scope.spellFactory.levels[j].build;
                        elixir += $scope.spellFactory.levels[j].cost;
                    }
                }
            }
            if($scope.player.clanCastle.length !== 0) {
                for(i = 0; i < $scope.player.clanCastle.length; i++) {
                    for(j = $scope.player.clanCastle[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.clanCastle.level; j++) {
                        time += $scope.clanCastle.levels[j].build;
                        gold += $scope.clanCastle.levels[j].cost;
                    }
                }
            }
            if($scope.player.cannon.length !== 0) {
                for(i = 0; i < $scope.player.cannon.length; i++) {
                    for(j = $scope.player.cannon[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.cannon.level; j++) {
                        time += $scope.cannon.levels[j].build;
                        gold += $scope.cannon.levels[j].cost;
                    }
                }
            }
            if($scope.player.archerTower.length !== 0) {
                for(i = 0; i < $scope.player.archerTower.length; i++) {
                    for(j = $scope.player.archerTower[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.archerTower.level; j++) {
                        time += $scope.archerTower.levels[j].build;
                        gold += $scope.archerTower.levels[j].cost;
                    }
                }
            }
            if($scope.player.walls.length !== 0) {
                for(i = 0; i < $scope.player.walls.length; i++) {
                    for(j = i; j < $scope.townHall.levels[$scope.townHallLevel].buildings.wall.level; j++) {
                        gold += $scope.wall.levels[j].cost * $scope.player.walls[i];
                    }
                }
            }
            if($scope.player.mortar.length !== 0) {
                for(i = 0; i < $scope.player.mortar.length; i++) {
                    for(j = $scope.player.mortar[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.mortar.level; j++) {
                        time += $scope.mortar.levels[j].build;
                        gold += $scope.mortar.levels[j].cost;
                    }
                }
            }
            if($scope.player.bomb.length !== 0) {
                for(i = 0; i < $scope.player.bomb.length; i++) {
                    for(j = $scope.player.bomb[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.bomb.level; j++) {
                        time += $scope.bomb.levels[j].build;
                        gold += $scope.bomb.levels[j].cost;
                    }
                }
            }
            if($scope.player.airDefense.length !== 0) {
                for(i = 0; i < $scope.player.airDefense.length; i++) {
                    for(j = $scope.player.airDefense[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.airDefense.level; j++) {
                        time += $scope.airDefense.levels[j].build;
                        gold += $scope.airDefense.levels[j].cost;
                    }
                }
            }
            if($scope.player.springTrap.length !== 0) {
                for(i = 0; i < $scope.player.springTrap.length; i++) {
                    for(j = $scope.player.springTrap[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.springTrap.level; j++) {
                        time += $scope.springTrap.levels[j].build;
                        gold += $scope.springTrap.levels[j].cost;
                    }
                }
            }
            if($scope.player.wizardTower.length !== 0) {
                for(i = 0; i < $scope.player.wizardTower.length; i++) {
                    for(j = $scope.player.wizardTower[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.wizardTower.level; j++) {
                        time += $scope.wizardTower.levels[j].build;
                        gold += $scope.wizardTower.levels[j].cost;
                    }
                }
            }
            if($scope.player.giantBomb.length !== 0) {
                for(i = 0; i < $scope.player.giantBomb.length; i++) {
                    for(j = $scope.player.giantBomb[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.giantBomb.level; j++) {
                        time += $scope.giantBomb.levels[j].build;
                        gold += $scope.giantBomb.levels[j].cost;
                    }
                }
            }
            if($scope.player.airBomb.length !== 0) {
                for(i = 0; i < $scope.player.airBomb.length; i++) {
                    for(j = $scope.player.airBomb[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.airBomb.level; j++) {
                        time += $scope.airBomb.levels[j].build;
                        gold += $scope.airBomb.levels[j].cost;
                    }
                }
            }
            if($scope.player.airMine.length !== 0) {
                for(i = 0; i < $scope.player.airMine.length; i++) {
                    for(j = $scope.player.airMine[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.airMine.level; j++) {
                        time += $scope.airMine.levels[j].build;
                        gold += $scope.airMine.levels[j].cost;
                    }
                }
            }
            if($scope.player.tesla.length !== 0) {
                for(i = 0; i < $scope.player.tesla.length; i++) {
                    for(j = $scope.player.tesla[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.tesla.level; j++) {
                        time += $scope.tesla.levels[j].build;
                        gold += $scope.tesla.levels[j].cost;
                    }
                }
            }
            if($scope.player.xbow.length !== 0) {
                for (i = 0; i < $scope.player.xbow.length; i++) {
                    for(j = $scope.player.xbow[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.xbow.level; j++) {
                        time += $scope.xbow.levels[j].build;
                        gold += $scope.xbow.levels[j].cost;
                    }
                }
            }
            if($scope.player.inferno.length !== 0) {
                for (i = 0; i < $scope.player.inferno.length; i++) {
                    for(j = $scope.player.inferno[i]; j < $scope.townHall.levels[$scope.townHallLevel].buildings.inferno.level; j++) {
                        time += $scope.inferno.levels[j].build;
                        gold += $scope.inferno.levels[j].cost;
                    }
                }
            }

            return 'To max town hall level ' + ($scope.townHallLevel+1) + ' will take ' + Math.ceil(time/$scope.builders) + ' hour(s) and require ' + gold + ' gold and ' + elixir + ' elixir';
        };

        $scope.updatePlayer = function() {
            $scope.player.townHall = $scope.townHallLevel;
            $scope.player.goldMine = [];
            $scope.player.elixirPump = [];
            $scope.player.darkElixirDrill = [];
            $scope.player.goldStorage = [];
            $scope.player.elixirStorage = [];
            $scope.player.darkElixirStorage = [];
            $scope.player.darkBarracks = [];
            $scope.player.barracks = [];
            $scope.player.armyCamps = [];
            $scope.player.laboratory = [];
            $scope.player.spellFactory = [];
            $scope.player.clanCastle = [];
            $scope.player.cannon = [];
            $scope.player.archerTower = [];
            $scope.player.walls = [];
            $scope.player.mortar = [];
            $scope.player.bomb = [];
            $scope.player.airDefense = [];
            $scope.player.springTrap = [];
            $scope.player.wizardTower = [];
            $scope.player.giantBomb = [];
            $scope.player.airBomb = [];
            $scope.player.airMine = [];
            $scope.player.tesla = [];
            $scope.player.xbow = [];
            $scope.player.inferno = [];

            for (var i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.goldMine.quantity; i++) {
                $scope.player.goldMine[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.elixirPump.quantity; i++) {
                $scope.player.elixirPump[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.darkElixirDrill.quantity; i++) {
                $scope.player.darkElixirDrill[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.goldStorage.quantity; i++) {
                $scope.player.goldStorage[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.elixirStorage.quantity; i++) {
                $scope.player.elixirStorage[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.darkElixirStorage.quantity; i++) {
                $scope.player.darkElixirStorage[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.darkBarracks.quantity; i++) {
                $scope.player.darkBarracks[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.barracks.quantity; i++) {
                $scope.player.barracks[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.armyCamps.quantity; i++) {
                $scope.player.armyCamps[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.laboratory.quantity; i++) {
                $scope.player.laboratory[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.spellFactory.quantity; i++) {
                $scope.player.spellFactory[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.cannon.quantity; i++) {
                $scope.player.cannon[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.archerTower.quantity; i++) {
                $scope.player.archerTower[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.wall.level; i++) {
                $scope.player.walls[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.mortar.quantity; i++) {
                $scope.player.mortar[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.bomb.quantity; i++) {
                $scope.player.bomb[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.airDefense.quantity; i++) {
                $scope.player.airDefense[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.springTrap.quantity; i++) {
                $scope.player.springTrap[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.wizardTower.quantity; i++) {
                $scope.player.wizardTower[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.giantBomb.quantity; i++) {
                $scope.player.giantBomb[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.airBomb.quantity; i++) {
                $scope.player.airBomb[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.airMine.quantity; i++) {
                $scope.player.airMine[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.tesla.quantity; i++) {
                $scope.player.tesla[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.xbow.quantity; i++) {
                $scope.player.xbow[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.inferno.quantity; i++) {
                $scope.player.inferno[i] = 0;
            }
            for (i = 0; i < $scope.townHall.levels[$scope.townHallLevel].buildings.clanCastle.quantity; i++) {
                $scope.player.clanCastle[i] = 0;
            }

        };


        $scope.barbarian = [];
        $scope.barbarian[0] = {
            dps: 8,
            hp: 20,
            cost: 25,
            space: 1
        };
        $scope.barbarian[1] = {
            dps: 11,
            hp: 23,
            cost: 40,
            space: 1
        };
        $scope.barbarian[2] = {
            dps: 14,
            hp: 28,
            cost: 60,
            space: 1
        };
        $scope.barbarian[3] = {
            dps: 18,
            hp: 33,
            cost: 80,
            space: 1
        };
        $scope.barbarian[4] = {
            dps: 23,
            hp: 40,
            cost: 100,
            space: 1
        };
        $scope.barbarian[5] = {
            dps: 26,
            hp: 44,
            cost: 150,
            space: 1
        };

        $scope.archer = [];
        $scope.archer[0] = {
            dps: 7,
            hp: 20,
            cost: 25,
            space: 1
        };
        $scope.archer[1] = {
            dps: 9,
            hp: 23,
            cost: 40,
            space: 1
        };
        $scope.archer[2] = {
            dps: 12,
            hp: 28,
            cost: 60,
            space: 1
        };
        $scope.archer[3] = {
            dps: 16,
            hp: 33,
            cost: 80,
            space: 1
        };
        $scope.archer[4] = {
            dps: 20,
            hp: 40,
            cost: 100,
            space: 1
        };
        $scope.archer[5] = {
            dps: 22,
            hp: 44,
            cost: 150,
            space: 1
        };

        $scope.goblin = [];
        $scope.goblin[0] = {
            dps: 11,
            hp: 25,
            cost: 25,
            space: 1
        };
        $scope.goblin[1] = {
            dps: 14,
            hp: 30,
            cost: 80,
            space: 1
        };
        $scope.goblin[2] = {
            dps: 19,
            hp: 36,
            cost: 120,
            space: 1
        };
        $scope.goblin[3] = {
            dps: 24,
            hp: 43,
            cost: 160,
            space: 1
        };
        $scope.goblin[4] = {
            dps: 32,
            hp: 52,
            cost: 200,
            space: 1
        };
        $scope.goblin[5] = {
            dps: 42,
            hp: 68,
            cost: 300,
            space: 1
        };

        $scope.giant = [];
        $scope.giant[0] = {
            dps: 11,
            hp: 300,
            cost: 500,
            space: 5
        };
        $scope.giant[1] = {
            dps: 14,
            hp: 360,
            cost: 1000,
            space: 5
        };
        $scope.giant[2] = {
            dps: 19,
            hp: 430,
            cost: 1500,
            space: 5
        };
        $scope.giant[3] = {
            dps: 24,
            hp: 520,
            cost: 2000,
            space: 5
        };
        $scope.giant[4] = {
            dps: 31,
            hp: 670,
            cost: 2500,
            space: 5
        };
        $scope.giant[5] = {
            dps: 22,
            hp: 940,
            cost: 3000,
            space: 5
        };

        $scope.wallbreaker = [];
        $scope.wallbreaker[0] = {
            dps: 12,
            hp: 20,
            cost: 1000,
            space: 2
        };
        $scope.wallbreaker[1] = {
            dps: 16,
            hp: 24,
            cost: 1500,
            space: 2
        };
        $scope.wallbreaker[2] = {
            dps: 24,
            hp: 29,
            cost: 2000,
            space: 2
        };
        $scope.wallbreaker[3] = {
            dps: 32,
            hp: 35,
            cost: 2500,
            space: 2
        };
        $scope.wallbreaker[4] = {
            dps: 46,
            hp: 42,
            cost: 3000,
            space: 2
        };
        $scope.wallbreaker[5] = {
            dps: 60,
            hp: 54,
            cost: 3500,
            space: 2
        };

        $scope.balloon = [];
        $scope.balloon[0] = {
            dps: 25,
            hp: 150,
            cost: 2000,
            space: 5
        };
        $scope.balloon[1] = {
            dps: 32,
            hp: 180,
            cost: 2500,
            space: 5
        };
        $scope.balloon[2] = {
            dps: 48,
            hp: 216,
            cost: 3000,
            space: 5
        };
        $scope.balloon[3] = {
            dps: 72,
            hp: 280,
            cost: 3500,
            space: 5
        };
        $scope.balloon[4] = {
            dps: 108,
            hp: 390,
            cost: 4000,
            space: 5
        };
        $scope.balloon[5] = {
            dps: 162,
            hp: 545,
            cost: 4500,
            space: 5
        };

        $scope.wizard = [];
        $scope.wizard[0] = {
            dps: 50,
            hp: 75,
            cost: 1500,
            space: 4
        };
        $scope.wizard[1] = {
            dps: 70,
            hp: 90,
            cost: 2000,
            space: 4
        };
        $scope.wizard[2] = {
            dps: 90,
            hp: 108,
            cost: 2500,
            space: 4
        };
        $scope.wizard[3] = {
            dps: 125,
            hp: 130,
            cost: 3000,
            space: 4
        };
        $scope.wizard[4] = {
            dps: 170,
            hp: 156,
            cost: 3500,
            space: 4
        };
        $scope.wizard[5] = {
            dps: 180,
            hp: 156,
            cost: 4000,
            space: 4
        };

        $scope.healer = [];
        $scope.healer[0] = {
            dps: 35,
            hp: 500,
            cost: 5000,
            space: 14
        };
        $scope.healer[1] = {
            dps: 42,
            hp: 600,
            cost: 6000,
            space: 14
        };
        $scope.healer[2] = {
            dps: 55,
            hp: 840,
            cost: 8000,
            space: 14
        };
        $scope.healer[3] = {
            dps: 55,
            hp: 1176,
            cost: 10000,
            space: 14
        };

        $scope.dragon = [];
        $scope.dragon[0] = {
            dps: 140,
            hp: 1900,
            cost: 25000,
            space: 220
        };
        $scope.dragon[1] = {
            dps: 160,
            hp: 2100,
            cost: 30000,
            space: 20
        };
        $scope.dragon[2] = {
            dps: 180,
            hp: 2300,
            cost: 36000,
            space: 20
        };
        $scope.dragon[3] = {
            dps: 200,
            hp: 2300,
            cost: 42000,
            space: 20
        };

        $scope.pekka = [];
        $scope.pekka[0] = {
            dps: 240,
            hp: 2800,
            cost: 30000,
            space: 25
        };
        $scope.pekka[1] = {
            dps: 270,
            hp: 3100,
            cost: 35000,
            space: 25
        };
        $scope.pekka[2] = {
            dps: 300,
            hp: 3500,
            cost: 42000,
            space: 25
        };
        $scope.pekka[3] = {
            dps: 340,
            hp: 4000,
            cost: 50000,
            space: 25
        };

        $scope.minion = [];
        $scope.minion[0] = {
            dps: 35,
            hp: 55,
            cost: 6,
            space: 2
        };
        $scope.minion[1] = {
            dps: 38,
            hp: 60,
            cost: 7,
            space: 2
        };
        $scope.minion[2] = {
            dps: 42,
            hp: 66,
            cost: 8,
            space: 2
        };
        $scope.minion[3] = {
            dps: 46,
            hp: 72,
            cost: 9,
            space: 2
        };
        $scope.minion[4] = {
            dps: 50,
            hp: 78,
            cost: 10,
            space: 2
        };
        $scope.minion[5] = {
            dps: 54,
            hp: 84,
            cost: 11,
            space: 2
        };

        $scope.hog = [];
        $scope.hog[0] = {
            dps: 60,
            hp: 270,
            cost: 40,
            space: 5
        };
        $scope.hog[1] = {
            dps: 70,
            hp: 312,
            cost: 45,
            space: 5
        };
        $scope.hog[2] = {
            dps: 80,
            hp: 360,
            cost: 52,
            space: 5
        };
        $scope.hog[3] = {
            dps: 92,
            hp: 415,
            cost: 58,
            space: 5
        };
        $scope.hog[4] = {
            dps: 105,
            hp: 475,
            cost: 65,
            space: 5
        };

        $scope.valkyrie = [];
        $scope.valkyrie[0] = {
            dps: 88,
            hp: 900,
            cost: 70,
            space: 8
        };
        $scope.valkyrie[1] = {
            dps: 99,
            hp: 1000,
            cost: 100,
            space: 8
        };
        $scope.valkyrie[2] = {
            dps: 111,
            hp: 1100,
            cost: 130,
            space: 8
        };
        $scope.valkyrie[3] = {
            dps: 124,
            hp: 1200,
            cost: 160,
            space: 8
        };

        $scope.golem = [];
        $scope.golem[0] = {
            dps: 38,
            hp: 4500,
            cost: 450,
            space: 30
        };
        $scope.golem[1] = {
            dps: 42,
            hp: 5000,
            cost: 525,
            space: 30
        };
        $scope.golem[2] = {
            dps: 46,
            hp: 5500,
            cost: 600,
            space: 30
        };
        $scope.golem[3] = {
            dps: 50,
            hp: 6000,
            cost: 675,
            space: 30
        };
        $scope.golem[4] = {
            dps: 54,
            hp: 6300,
            cost: 750,
            space: 30
        };

        $scope.witch = [];
        $scope.witch[0] = {
            dps: 25,
            hp: 75,
            cost: 250,
            space: 12
        };
        $scope.witch[1] = {
            dps: 30,
            hp: 100,
            cost: 350,
            space: 12
        };

        $scope.troops = [
            $scope.barbarian,
            $scope.archer,
            $scope.goblin,
            $scope.giant,
            $scope.wallbreaker,
            $scope.balloon,
            $scope.wizard,
            $scope.healer,
            $scope.dragon,
            $scope.pekka,
            $scope.minion,
            $scope.hog,
            $scope.valkyrie,
            $scope.golem,
            $scope.witch
        ];



        $scope.archerTower = {
            title: 'Archer Tower',
            range: 10,
            speed: 1,
            levels: []
        };
        $scope.archerTower.levels[0] = {
            dps: 11,
            hp: 400,
            cost: 1000,
            build: 0.25
        };
        $scope.archerTower.levels[1] = {
            dps: 15,
            hp: 450,
            cost: 2000,
            build: 0.5
        };
        $scope.archerTower.levels[2] = {
            dps: 19,
            hp: 500,
            cost: 5000,
            build: 0.75
        };
        $scope.archerTower.levels[3] = {
            dps: 25,
            hp: 550,
            cost: 20000,
            build: 4
        };
        $scope.archerTower.levels[4] = {
            dps: 30,
            hp: 590,
            cost: 80000,
            build: 12
        };
        $scope.archerTower.levels[5] = {
            dps: 35,
            hp: 610,
            cost: 180000,
            build: 24
        };
        $scope.archerTower.levels[6] = {
            dps: 42,
            hp: 630,
            cost: 360000,
            build: 48
        };
        $scope.archerTower.levels[7] = {
            dps: 48,
            hp: 660,
            cost: 720000,
            build: 72
        };
        $scope.archerTower.levels[8] = {
            dps: 56,
            hp: 690,
            cost: 1500000,
            build: 96
        };
        $scope.archerTower.levels[9] = {
            dps: 65,
            hp: 720,
            cost: 2500000,
            build: 120
        };
        $scope.archerTower.levels[10] = {
            dps: 75,
            hp: 750,
            cost: 5000000,
            build: 144
        };
        $scope.archerTower.levels[11] = {
            dps: 86,
            hp: 790,
            cost: 7500000,
            build: 168
        };

        $scope.cannon = {
            title: 'Cannon',
            range: 9,
            speed: 0.8,
            levels: []
        };
        $scope.cannon.levels[0] = {
            dps: 9,
            hp: 400,
            cost: 250,
            build: 0.01
        };
        $scope.cannon.levels[1] = {
            dps: 11,
            hp: 450,
            cost: 1000,
            build: 0.25
        };
        $scope.cannon.levels[2] = {
            dps: 15,
            hp: 500,
            cost: 4000,
            build: 0.75
        };
        $scope.cannon.levels[3] = {
            dps: 19,
            hp: 550,
            cost: 16000,
            build: 2
        };
        $scope.cannon.levels[4] = {
            dps: 25,
            hp: 590,
            cost: 50000,
            build: 6
        };
        $scope.cannon.levels[5] = {
            dps: 31,
            hp: 610,
            cost: 100000,
            build: 12
        };
        $scope.cannon.levels[6] = {
            dps: 40,
            hp: 630,
            cost: 200000,
            build: 24
        };
        $scope.cannon.levels[7] = {
            dps: 48,
            hp: 660,
            cost: 400000,
            build: 48
        };
        $scope.cannon.levels[8] = {
            dps: 56,
            hp: 690,
            cost: 800000,
            build: 72
        };
        $scope.cannon.levels[9] = {
            dps: 65,
            hp: 750,
            cost: 1600000,
            build: 96
        };
        $scope.cannon.levels[10] = {
            dps: 75,
            hp: 900,
            cost: 3200000,
            build: 120
        };
        $scope.cannon.levels[11] = {
            dps: 86,
            hp: 1080,
            cost: 6400000,
            build: 144
        };


        $scope.mortar = {
            title: 'Mortar',
            range: 11,
            speed: 5,
            levels: []
        };
        $scope.mortar.levels[0] = {
            dps: 4,
            hp: 400,
            cost: 8000,
            build: 8
        };
        $scope.mortar.levels[1] = {
            dps: 5,
            hp: 450,
            cost: 32000,
            build: 12
        };
        $scope.mortar.levels[2] = {
            dps: 6,
            hp: 500,
            cost: 120000,
            build: 24
        };
        $scope.mortar.levels[3] = {
            dps: 7,
            hp: 550,
            cost: 400000,
            build: 48
        };
        $scope.mortar.levels[4] = {
            dps: 8,
            hp: 590,
            cost: 800000,
            build: 96
        };
        $scope.mortar.levels[5] = {
            dps: 9,
            hp: 610,
            cost: 1600000,
            build: 120
        };
        $scope.mortar.levels[6] = {
            dps: 11,
            hp: 640,
            cost: 3200000,
            build: 168
        };
        $scope.mortar.levels[7] = {
            dps: 13,
            hp: 670,
            cost: 6400000,
            build: 240
        };

        $scope.airDefense = {
            title: 'Air Defense',
            range: 10,
            speed: 1,
            levels: []
        };
        $scope.airDefense.levels[0] = {
            dps: 80,
            hp: 800,
            cost: 22500,
            build: 5
        };
        $scope.airDefense.levels[1] = {
            dps: 110,
            hp: 860,
            cost: 80000,
            build: 24
        };
        $scope.airDefense.levels[2] = {
            dps: 140,
            hp: 900,
            cost: 270000,
            build: 72
        };
        $scope.airDefense.levels[3] = {
            dps: 160,
            hp: 940,
            cost: 540000,
            build: 120
        };
        $scope.airDefense.levels[4] = {
            dps: 190,
            hp: 990,
            cost: 1080000,
            build: 144
        };
        $scope.airDefense.levels[5] = {
            dps: 230,
            hp: 1040,
            cost: 2160000,
            build: 192
        };
        $scope.airDefense.levels[6] = {
            dps: 280,
            hp: 1100,
            cost: 4320000,
            build: 240
        };
        $scope.airDefense.levels[7] = {
            dps: 320,
            hp: 1160,
            cost: 7560000,
            build: 288
        };

        $scope.wizardTower = {
            title: 'Wizard Tower',
            range: 7,
            speed: 1.3,
            levels: []
        };
        $scope.wizardTower.levels[0] = {
            dps: 11,
            hp: 620,
            cost: 180000,
            build: 12
        };
        $scope.wizardTower.levels[1] = {
            dps: 13,
            hp: 660,
            cost: 360000,
            build: 24
        };
        $scope.wizardTower.levels[2] = {
            dps: 16,
            hp: 690,
            cost: 720000,
            build: 48
        };
        $scope.wizardTower.levels[3] = {
            dps: 20,
            hp: 720,
            cost: 1280000,
            build: 72
        };
        $scope.wizardTower.levels[4] = {
            dps: 24,
            hp: 760,
            cost: 1960000,
            build: 96
        };
        $scope.wizardTower.levels[5] = {
            dps: 32,
            hp: 800,
            cost: 2680000,
            build: 120
        };
        $scope.wizardTower.levels[6] = {
            dps: 40,
            hp: 840,
            cost: 5360000,
            build: 168
        };
        $scope.wizardTower.levels[7] = {
            dps: 48,
            hp: 880,
            cost: 6480000,
            build: 240
        };

        $scope.tesla = {
            title: 'Tesla',
            range: 7,
            speed: 0.6,
            levels: []
        };
        $scope.tesla.levels[0] = {
            dps: 34,
            hp: 600,
            cost: 100000,
            build: 24
        };
        $scope.tesla.levels[1] = {
            dps: 40,
            hp: 630,
            cost: 1250000,
            build: 72
        };
        $scope.tesla.levels[2] = {
            dps: 48,
            hp: 660,
            cost: 1500000,
            build: 120
        };
        $scope.tesla.levels[3] = {
            dps: 55,
            hp: 690,
            cost: 2000000,
            build: 144
        };
        $scope.tesla.levels[4] = {
            dps: 64,
            hp: 730,
            cost: 2500000,
            build: 192
        };
        $scope.tesla.levels[5] = {
            dps: 75,
            hp: 770,
            cost: 3000000,
            build: 240
        };
        $scope.tesla.levels[6] = {
            dps: 87,
            hp: 810,
            cost: 3500000,
            build: 288
        };
        $scope.tesla.levels[7] = {
            dps: 99,
            hp: 850,
            cost: 5000000,
            build: 336
        };

        $scope.xbow = {
            title: 'X-Bow',
            range: 11,
            speed: 0.128,
            levels: []
        };
        $scope.xbow.levels[0] = {
            dps: 50,
            hp: 1500,
            cost: 3000000,
            build: 168
        };
        $scope.xbow.levels[1] = {
            dps: 60,
            hp: 1900,
            cost: 5000000,
            build: 240
        };
        $scope.xbow.levels[2] = {
            dps: 75,
            hp: 2400,
            cost: 7000000,
            build: 336
        };
        $scope.xbow.levels[3] = {
            dps: 80,
            hp: 2800,
            cost: 8000000,
            build: 336
        };

        $scope.inferno = {
            title: 'Inferno Tower',
            range: 9,
            speed: 0.128,
            levels: []
        };
        $scope.inferno.levels[0] = {
            dps: 24,
            hp: 1500,
            cost: 5000000,
            build: 168
        };
        $scope.inferno.levels[1] = {
            dps: 30,
            hp: 1900,
            cost: 6500000,
            build: 240
        };
        $scope.inferno.levels[2] = {
            dps: 36,
            hp: 2200,
            cost: 8000000,
            build: 336
        };

        $scope.wall = {
            title: 'Wall',
            range: 0,
            speed: 0,
            levels: []
        };
        $scope.wall.levels[0] = {
            dps: 0,
            hp: 300,
            cost: 200,
            build: 0
        };
        $scope.wall.levels[1] = {
            dps: 0,
            hp: 500,
            cost: 1000,
            build: 0
        };
        $scope.wall.levels[2] = {
            dps: 0,
            hp: 700,
            cost: 5000,
            build: 10
        };
        $scope.wall.levels[3] = {
            dps: 0,
            hp: 900,
            cost: 10000,
            build: 10
        };
        $scope.wall.levels[4] = {
            dps: 0,
            hp: 1400,
            cost: 30000,
            build: 10
        };
        $scope.wall.levels[5] = {
            dps: 0,
            hp: 2000,
            cost: 75000,
            build: 20
        };
        $scope.wall.levels[6] = {
            dps: 0,
            hp: 2500,
            cost: 200000,
            build: 20
        };
        $scope.wall.levels[7] = {
            dps: 0,
            hp: 3000,
            cost: 500000,
            build: 30
        };
        $scope.wall.levels[8] = {
            dps: 0,
            hp: 4000,
            cost: 1000000,
            build: 30
        };
        $scope.wall.levels[9] = {
            dps: 0,
            hp: 5500,
            cost: 3000000,
            build: 30
        };
        $scope.wall.levels[10] = {
            dps: 0,
            hp: 7000,
            cost: 4000000,
            build: 30
        };

        $scope.bomb = {
            title: 'Bomb Trap',
            range: 3,
            speed: 0,
            levels: []
        };
        $scope.bomb.levels[0] = {
            dps: 12,
            hp: 0,
            cost: 400,
            build: 0
        };
        $scope.bomb.levels[1] = {
            dps: 0,
            hp: 0,
            cost: 1000,
            build: 0.25
        };
        $scope.bomb.levels[2] = {
            dps: 0,
            hp: 0,
            cost: 10000,
            build: 2
        };
        $scope.bomb.levels[3] = {
            dps: 0,
            hp: 0,
            cost: 100000,
            build: 8
        };
        $scope.bomb.levels[4] = {
            dps: 0,
            hp: 0,
            cost: 1000000,
            build: 24
        };
        $scope.bomb.levels[5] = {
            dps: 0,
            hp: 0,
            cost: 1500000,
            build: 48
        };

        $scope.springTrap = {
            title: 'Spring Trap',
            range: 1,
            speed: 0,
            levels: []
        };
        $scope.springTrap.levels[0] = {
            dps: 0,
            hp: 0,
            cost: 2000,
            build: 0
        };

        $scope.giantBomb = {
            title: 'Giant Bomb',
            range: 0,
            speed: 0,
            levels: []
        };
        $scope.giantBomb.levels[0] = {
            dps: 175,
            range: 3,
            hp: 0,
            cost: 12500,
            build: 0
        };
        $scope.giantBomb.levels[1] = {
            dps: 200,
            hp: 0,
            range: 3.5,
            cost: 75000,
            build: 6
        };
        $scope.giantBomb.levels[2] = {
            dps: 225,
            hp: 0,
            range: 3.5,
            cost: 750000,
            build: 24
        };
        $scope.giantBomb.levels[3] = {
            dps: 250,
            hp: 0,
            range: 4,
            cost: 2500000,
            build: 72
        };

        $scope.airBomb = {
            title: 'Air Bomb',
            range: 3,
            speed: 0,
            levels: []
        };
        $scope.airBomb.levels[0] = {
            dps: 100,
            hp: 0,
            cost: 12500,
            build: 0
        };
        $scope.airBomb.levels[1] = {
            dps: 120,
            hp: 0,
            cost: 20000,
            build: 4
        };
        $scope.airBomb.levels[2] = {
            dps: 144,
            hp: 0,
            cost: 200000,
            build: 12
        };
        $scope.airBomb.levels[3] = {
            dps: 173,
            hp: 0,
            cost: 1500000,
            build: 24
        };

        $scope.airMine = {
            title: 'Seeking Air Mine',
            range: 3,
            speed: 0,
            levels: []
        };
        $scope.airMine.levels[0] = {
            dps: 1500,
            hp: 0,
            cost: 15000,
            build: 0
        };
        $scope.airMine.levels[1] = {
            dps: 1800,
            hp: 0,
            cost: 2000000,
            build: 24
        };
        $scope.airMine.levels[2] = {
            dps: 2100,
            hp: 0,
            cost: 4000000,
            build: 72
        };

        $scope.goldMine = {
            title: 'Gold Mine',
            levels: []
        };
        $scope.goldMine.levels[0] = {
            cost: 150,
            build: 0.16,
            production: 200
        };
        $scope.goldMine.levels[1] = {
            cost: 300,
            build: 0.083,
            production: 400
        };
        $scope.goldMine.levels[2] = {
            cost: 700,
            build: 0.25,
            production: 600
        };
        $scope.goldMine.levels[3] = {
            cost: 1400,
            build: 1,
            production: 800
        };
        $scope.goldMine.levels[4] = {
            cost: 3000,
            build: 2,
            production: 1000
        };
        $scope.goldMine.levels[5] = {
            cost: 7000,
            build: 6,
            production: 1300
        };
        $scope.goldMine.levels[6] = {
            cost: 14000,
            build: 12,
            production: 1600
        };
        $scope.goldMine.levels[7] = {
            cost: 28000,
            build: 24,
            production: 1900
        };
        $scope.goldMine.levels[8] = {
            cost: 56000,
            build: 48,
            production: 2200
        };
        $scope.goldMine.levels[9] = {
            cost: 84000,
            build: 72,
            production: 2500
        };
        $scope.goldMine.levels[10] = {
            cost: 168000,
            build: 96,
            production: 3000
        };

        $scope.elixirPump = {
            title: 'Elixir Pump',
            levels: []
        };
        $scope.elixirPump.levels[0] = {
            cost: 150,
            build: 0.16,
            production: 200
        };
        $scope.elixirPump.levels[1] = {
            cost: 300,
            build: 0.083,
            production: 400
        };
        $scope.elixirPump.levels[2] = {
            cost: 700,
            build: 0.25,
            production: 600
        };
        $scope.elixirPump.levels[3] = {
            cost: 1400,
            build: 1,
            production: 800
        };
        $scope.elixirPump.levels[4] = {
            cost: 3000,
            build: 2,
            production: 1000
        };
        $scope.elixirPump.levels[5] = {
            cost: 7000,
            build: 6,
            production: 1300
        };
        $scope.elixirPump.levels[6] = {
            cost: 14000,
            build: 12,
            production: 1600
        };
        $scope.elixirPump.levels[7] = {
            cost: 28000,
            build: 24,
            production: 1900
        };
        $scope.elixirPump.levels[8] = {
            cost: 56000,
            build: 48,
            production: 2200
        };
        $scope.elixirPump.levels[9] = {
            cost: 84000,
            build: 72,
            production: 2500
        };
        $scope.elixirPump.levels[10] = {
            cost: 168000,
            build: 96,
            production: 3000
        };

        $scope.darkElixirDrill = {
            title: 'Elixir Pump',
            levels: []
        };
        $scope.darkElixirDrill.levels[0] = {
            cost: 1000000,
            build: 24,
            production: 20
        };
        $scope.darkElixirDrill.levels[1] = {
            cost: 1500000,
            build: 48,
            production: 30
        };
        $scope.darkElixirDrill.levels[2] = {
            cost: 2000000,
            build: 72,
            production: 45
        };
        $scope.darkElixirDrill.levels[3] = {
            cost: 3000000,
            build: 96,
            production: 60
        };
        $scope.darkElixirDrill.levels[4] = {
            cost: 4000000,
            build: 144,
            production: 80
        };
        $scope.darkElixirDrill.levels[5] = {
            cost: 5000000,
            build: 192,
            production: 100
        };

        $scope.goldStorage = {
            title: 'Gold Storage',
            levels: []
        };
        $scope.goldStorage.levels[0] = {
            cost: 300,
            build: 0.01,
            storage: 1500
        };
        $scope.goldStorage.levels[1] = {
            cost: 750,
            build: 0.5,
            storage: 3000
        };
        $scope.goldStorage.levels[2] = {
            cost: 1500,
            build: 1,
            storage: 6000
        };
        $scope.goldStorage.levels[3] = {
            cost: 3000,
            build: 2,
            storage: 12000
        };
        $scope.goldStorage.levels[4] = {
            cost: 6000,
            build: 3,
            storage: 25000
        };
        $scope.goldStorage.levels[5] = {
            cost: 12000,
            build: 4,
            storage: 50000
        };
        $scope.goldStorage.levels[6] = {
            cost: 25000,
            build: 6,
            storage: 100000
        };
        $scope.goldStorage.levels[7] = {
            cost: 50000,
            build: 8,
            storage: 250000
        };
        $scope.goldStorage.levels[8] = {
            cost: 100000,
            build: 12,
            storage: 500000
        };
        $scope.goldStorage.levels[9] = {
            cost: 250000,
            build: 24,
            storage: 1000000
        };
        $scope.goldStorage.levels[10] = {
            cost: 500000,
            build: 48,
            storage: 2000000
        };

        $scope.elixirStorage = {
            title: 'Elixir Storage',
            levels: []
        };
        $scope.elixirStorage.levels[0] = {
            cost: 300,
            build: 0.01,
            storage: 1500
        };
        $scope.elixirStorage.levels[1] = {
            cost: 750,
            build: 0.5,
            storage: 3000
        };
        $scope.elixirStorage.levels[2] = {
            cost: 1500,
            build: 1,
            storage: 6000
        };
        $scope.elixirStorage.levels[3] = {
            cost: 3000,
            build: 2,
            storage: 12000
        };
        $scope.elixirStorage.levels[4] = {
            cost: 6000,
            build: 3,
            storage: 25000
        };
        $scope.elixirStorage.levels[5] = {
            cost: 12000,
            build: 4,
            storage: 50000
        };
        $scope.elixirStorage.levels[6] = {
            cost: 25000,
            build: 6,
            storage: 100000
        };
        $scope.elixirStorage.levels[7] = {
            cost: 50000,
            build: 8,
            storage: 250000
        };
        $scope.elixirStorage.levels[8] = {
            cost: 100000,
            build: 12,
            storage: 500000
        };
        $scope.elixirStorage.levels[9] = {
            cost: 250000,
            build: 24,
            storage: 1000000
        };
        $scope.elixirStorage.levels[10] = {
            cost: 500000,
            build: 48,
            storage: 2000000
        };

        $scope.darkElixirStorage = {
            title: 'Dark Elixir Storage',
            levels: []
        };
        $scope.darkElixirStorage.levels[0] = {
            cost: 300,
            build: 24,
            storage: 10000
        };
        $scope.darkElixirStorage.levels[1] = {
            cost: 750,
            build: 48,
            storage: 20000
        };
        $scope.darkElixirStorage.levels[2] = {
            cost: 1500,
            build: 72,
            storage: 40000
        };
        $scope.darkElixirStorage.levels[3] = {
            cost: 3000,
            build: 96,
            storage: 80000
        };
        $scope.darkElixirStorage.levels[4] = {
            cost: 6000,
            build: 120,
            storage: 150000
        };
        $scope.darkElixirStorage.levels[5] = {
            cost: 12000,
            build: 144,
            storage: 200000
        };

        $scope.armyCamp = {
            title: 'Army Camp',
            levels: []
        };
        $scope.armyCamp.levels[0] = {
            cost: 250,
            build: 0.083,
            storage: 20
        };
        $scope.armyCamp.levels[1] = {
            cost: 750,
            build: 1,
            storage: 30
        };
        $scope.armyCamp.levels[2] = {
            cost: 1500,
            build: 3,
            storage: 35
        };
        $scope.armyCamp.levels[3] = {
            cost: 3000,
            build: 8,
            storage: 40
        };
        $scope.armyCamp.levels[4] = {
            cost: 6000,
            build: 24,
            storage: 45
        };
        $scope.armyCamp.levels[5] = {
            cost: 12000,
            build: 72,
            storage: 50
        };
        $scope.armyCamp.levels[6] = {
            cost: 25000,
            build: 120,
            storage: 55
        };
        $scope.armyCamp.levels[7] = {
            cost: 50000,
            build: 240,
            storage: 60
        };

        $scope.barracks = {
            title: 'Barracks',
            levels: []
        };
        $scope.barracks.levels[0] = {
            cost: 200,
            build: 0.083,
            storage: 20
        };
        $scope.barracks.levels[1] = {
            cost: 1000,
            build: 1,
            storage: 25
        };
        $scope.barracks.levels[2] = {
            cost: 2500,
            build: 3,
            storage: 30
        };
        $scope.barracks.levels[3] = {
            cost: 5000,
            build: 8,
            storage: 35
        };
        $scope.barracks.levels[4] = {
            cost: 10000,
            build: 24,
            storage: 40
        };
        $scope.barracks.levels[5] = {
            cost: 80000,
            build: 72,
            storage: 45
        };
        $scope.barracks.levels[6] = {
            cost: 240000,
            build: 120,
            storage: 50
        };
        $scope.barracks.levels[7] = {
            cost: 700000,
            build: 240,
            storage: 55
        };
        $scope.barracks.levels[8] = {
            cost: 1500000,
            build: 120,
            storage: 60
        };
        $scope.barracks.levels[9] = {
            cost: 2000000,
            build: 240,
            storage: 75
        };

        $scope.darkBarracks = {
            title: 'Dark Barracks',
            levels: []
        };
        $scope.darkBarracks.levels[0] = {
            cost: 750000,
            build: 72,
            storage: 40
        };
        $scope.darkBarracks.levels[1] = {
            cost: 1250000,
            build: 120,
            storage: 50
        };
        $scope.darkBarracks.levels[2] = {
            cost: 1750000,
            build: 144,
            storage: 60
        };
        $scope.darkBarracks.levels[3] = {
            cost: 2250000,
            build: 168,
            storage: 70
        };
        $scope.darkBarracks.levels[4] = {
            cost: 2750000,
            build: 192,
            storage: 80
        };

        $scope.laboratory = {
            title: 'Laboratory',
            levels: []
        };
        $scope.laboratory.levels[0] = {
            cost: 25000,
            build: 0.5
        };
        $scope.laboratory.levels[1] = {
            cost: 50000,
            build: 5
        };
        $scope.laboratory.levels[2] = {
            cost: 90000,
            build: 12
        };
        $scope.laboratory.levels[3] = {
            cost: 270000,
            build: 24
        };
        $scope.laboratory.levels[4] = {
            cost: 500000,
            build: 48
        };
        $scope.laboratory.levels[5] = {
            cost: 1000000,
            build: 96
        };
        $scope.laboratory.levels[6] = {
            cost: 2500000,
            build: 120
        };
        $scope.laboratory.levels[7] = {
            cost: 4000000,
            build: 144
        };

        $scope.spellFactory = {
            title: 'Spell Factory',
            levels: []
        };
        $scope.spellFactory.levels[0] = {
            cost: 200000,
            build: 24
        };
        $scope.spellFactory.levels[1] = {
            cost: 400000,
            build: 48
        };
        $scope.spellFactory.levels[2] = {
            cost: 800000,
            build: 72
        };
        $scope.spellFactory.levels[3] = {
            cost: 1600000,
            build: 96
        };
        $scope.spellFactory.levels[4] = {
            cost: 3200000,
            build: 144
        };

        $scope.clanCastle = {
            title: 'Clan Castle',
            levels: []
        };
        $scope.clanCastle.levels[0] = {
            cost: 40000,
            build: 0,
            capacity: 10
        };
        $scope.clanCastle.levels[1] = {
            cost: 100000,
            build: 6,
            capacity: 15
        };
        $scope.clanCastle.levels[2] = {
            cost: 800000,
            build: 24,
            capacity: 20
        };
        $scope.clanCastle.levels[3] = {
            cost: 1800000,
            build: 48,
            capacity: 25
        };
        $scope.clanCastle.levels[4] = {
            cost: 5000000,
            build: 168,
            capacity: 30
        };
        $scope.clanCastle.levels[5] = {
            cost: 7000000,
            build: 336,
            capacity: 35
        };

        $scope.barbarianKing = {
            title: 'Barbarian King',
            levels: []
        };
        $scope.barbarianKing.levels[0] = {
            cost: 10000,
            build: 0
        };

        $scope.archerQueen = {
            title: 'Archer Queen',
            levels: []
        };
        $scope.archerQueen.levels[0] = {
            cost: 40000,
            build: 0
        };

        $scope.townHall = {
            title: 'Town Hall',
            levels: []
        };
        $scope.townHall.levels[0] = {
            hp: 1500,
            cost: 0,
            build: 0,
            buildings: {
                goldMine: {
                    quantity: 1,
                    level: 2
                },
                elixirPump: {
                    quantity: 1,
                    level: 2
                },
                darkElixirDrill: {
                    quantity: 0,
                    level: 0
                },
                goldStorage: {
                    quantity: 1,
                    level: 1
                },
                elixirStorage: {
                    quantity: 1,
                    level: 1
                },
                darkElixirStorage: {
                    quantity: 0,
                    level: 0
                },
                darkBarracks: {
                    quantity: 0,
                    level: 0
                },
                barracks: {
                    quantity: 1,
                    level: 3
                },
                armyCamps: {
                    quantity: 1,
                    level: 1
                },
                laboratory: {
                    quantity: 0,
                    level: 0
                },
                spellFactory: {
                    quantity: 0,
                    level: 0
                },
                cannon: {
                    quantity: 2,
                    level: 2
                },
                archerTower: {
                    quantity: 0,
                    level: 0
                },
                wall: {
                    quantity: 0,
                    level: 0
                },
                mortar: {
                    quantity: 0,
                    level: 0
                },
                bomb: {
                    quantity: 0,
                    level: 0
                },
                airDefense: {
                    quantity: 0,
                    level: 0
                },
                springTrap: {
                    quantity: 0,
                    level: 1
                },
                wizardTower: {
                    quantity: 0,
                    level: 0
                },
                giantBomb: {
                    quantity: 0,
                    level: 0
                },
                airBomb: {
                    quantity: 0,
                    level: 0
                },
                airMine: {
                    quantity: 0,
                    level: 0
                },
                tesla: {
                    quantity: 0,
                    level: 0
                },
                xbow: {
                    quantity: 0,
                    level: 0
                },
                inferno: {
                    quantity: 0,
                    level: 0
                },
                clanCastle: {
                    quantity: 0,
                    level: 0
                }
            }
        };
        $scope.townHall.levels[1] = {
            hp: 1500,
            cost: 0,
            build: 0,
            buildings: {
                goldMine: {
                    quantity: 2,
                    level: 4
                },
                elixirPump: {
                    quantity: 2,
                    level: 4
                },
                darkElixirDrill: {
                    quantity: 0,
                    level: 0
                },
                goldStorage: {
                    quantity: 1,
                    level: 3
                },
                elixirStorage: {
                    quantity: 1,
                    level: 3
                },
                darkElixirStorage: {
                    quantity: 0,
                    level: 0
                },
                darkBarracks: {
                    quantity: 0,
                    level: 0
                },
                barracks: {
                    quantity: 2,
                    level: 4
                },
                armyCamps: {
                    quantity: 1,
                    level: 2
                },
                laboratory: {
                    quantity: 0,
                    level: 0
                },
                spellFactory: {
                    quantity: 0,
                    level: 0
                },
                cannon: {
                    quantity: 2,
                    level: 3
                },
                archerTower: {
                    quantity: 1,
                    level: 2
                },
                wall: {
                    quantity: 25,
                    level: 2
                },
                mortar: {
                    quantity: 0,
                    level: 0
                },
                bomb: {
                    quantity: 0,
                    level: 0
                },
                airDefense: {
                    quantity: 0,
                    level: 0
                },
                springTrap: {
                    quantity: 0,
                    level: 1
                },
                wizardTower: {
                    quantity: 0,
                    level: 0
                },
                giantBomb: {
                    quantity: 0,
                    level: 0
                },
                airBomb: {
                    quantity: 0,
                    level: 0
                },
                airMine: {
                    quantity: 0,
                    level: 0
                },
                tesla: {
                    quantity: 0,
                    level: 0
                },
                xbow: {
                    quantity: 0,
                    level: 0
                },
                inferno: {
                    quantity: 0,
                    level: 0
                },
                clanCastle: {
                    quantity: 0,
                    level: 0
                }
            }
        };
        $scope.townHall.levels[2] = {
            hp: 1500,
            cost: 0,
            build: 0,
            buildings: {
                goldMine: {
                    quantity: 3,
                    level: 6
                },
                elixirPump: {
                    quantity: 3,
                    level: 6
                },
                darkElixirDrill: {
                    quantity: 0,
                    level: 0
                },
                goldStorage: {
                    quantity: 2,
                    level: 6
                },
                elixirStorage: {
                    quantity: 2,
                    level: 6
                },
                darkElixirStorage: {
                    quantity: 0,
                    level: 0
                },
                darkBarracks: {
                    quantity: 0,
                    level: 0
                },
                barracks: {
                    quantity: 2,
                    level: 5
                },
                armyCamps: {
                    quantity: 2,
                    level: 3
                },
                laboratory: {
                    quantity: 1,
                    level: 1
                },
                spellFactory: {
                    quantity: 0,
                    level: 0
                },
                cannon: {
                    quantity: 2,
                    level: 4
                },
                archerTower: {
                    quantity: 1,
                    level: 3
                },
                wall: {
                    quantity: 50,
                    level: 3
                },
                mortar: {
                    quantity: 1,
                    level: 1
                },
                bomb: {
                    quantity: 2,
                    level: 2
                },
                airDefense: {
                    quantity: 0,
                    level: 0
                },
                springTrap: {
                    quantity: 0,
                    level: 1
                },
                wizardTower: {
                    quantity: 0,
                    level: 0
                },
                giantBomb: {
                    quantity: 0,
                    level: 0
                },
                airBomb: {
                    quantity: 0,
                    level: 0
                },
                airMine: {
                    quantity: 0,
                    level: 0
                },
                tesla: {
                    quantity: 0,
                    level: 0
                },
                xbow: {
                    quantity: 0,
                    level: 0
                },
                inferno: {
                    quantity: 0,
                    level: 0
                },
                clanCastle: {
                    quantity: 1,
                    level: 1
                }
            }
        };
        $scope.townHall.levels[3] = {
            hp: 1500,
            cost: 0,
            build: 0,
            buildings: {
                goldMine: {
                    quantity: 4,
                    level: 8
                },
                elixirPump: {
                    quantity: 4,
                    level: 8
                },
                darkElixirDrill: {
                    quantity: 0,
                    level: 0
                },
                goldStorage: {
                    quantity: 2,
                    level: 8
                },
                elixirStorage: {
                    quantity: 2,
                    level: 8
                },
                darkElixirStorage: {
                    quantity: 0,
                    level: 0
                },
                darkBarracks: {
                    quantity: 0,
                    level: 0
                },
                barracks: {
                    quantity: 3,
                    level: 6
                },
                armyCamps: {
                    quantity: 2,
                    level: 4
                },
                laboratory: {
                    quantity: 1,
                    level: 2
                },
                spellFactory: {
                    quantity: 0,
                    level: 0
                },
                cannon: {
                    quantity: 2,
                    level: 2
                },
                archerTower: {
                    quantity: 2,
                    level: 4
                },
                wall: {
                    quantity: 75,
                    level: 4
                },
                mortar: {
                    quantity: 1,
                    level: 2
                },
                bomb: {
                    quantity: 2,
                    level: 2
                },
                airDefense: {
                    quantity: 1,
                    level: 2
                },
                springTrap: {
                    quantity: 2,
                    level: 1
                },
                wizardTower: {
                    quantity: 0,
                    level: 0
                },
                giantBomb: {
                    quantity: 0,
                    level: 0
                },
                airBomb: {
                    quantity: 0,
                    level: 0
                },
                airMine: {
                    quantity: 0,
                    level: 0
                },
                tesla: {
                    quantity: 0,
                    level: 0
                },
                xbow: {
                    quantity: 0,
                    level: 0
                },
                inferno: {
                    quantity: 0,
                    level: 0
                },
                clanCastle: {
                    quantity: 1,
                    level: 2
                }
            }
        };
        $scope.townHall.levels[4] = {
            hp: 1500,
            cost: 0,
            build: 0,
            buildings: {
                goldMine: {
                    quantity: 5,
                    level: 10
                },
                elixirPump: {
                    quantity: 5,
                    level: 10
                },
                darkElixirDrill: {
                    quantity: 0,
                    level: 0
                },
                goldStorage: {
                    quantity: 2,
                    level: 9
                },
                elixirStorage: {
                    quantity: 2,
                    level: 9
                },
                darkElixirStorage: {
                    quantity: 0,
                    level: 0
                },
                darkBarracks: {
                    quantity: 0,
                    level: 0
                },
                barracks: {
                    quantity: 3,
                    level: 7
                },
                armyCamps: {
                    quantity: 3,
                    level: 5
                },
                laboratory: {
                    quantity: 1,
                    level: 3
                },
                spellFactory: {
                    quantity: 1,
                    level: 1
                },
                cannon: {
                    quantity: 3,
                    level: 6
                },
                archerTower: {
                    quantity: 3,
                    level: 6
                },
                wall: {
                    quantity: 100,
                    level: 5
                },
                mortar: {
                    quantity: 1,
                    level: 3
                },
                bomb: {
                    quantity: 4,
                    level: 3
                },
                airDefense: {
                    quantity: 1,
                    level: 3
                },
                springTrap: {
                    quantity: 2,
                    level: 1
                },
                wizardTower: {
                    quantity: 1,
                    level: 2
                },
                giantBomb: {
                    quantity: 0,
                    level: 0
                },
                airBomb: {
                    quantity: 2,
                    level: 2
                },
                airMine: {
                    quantity: 0,
                    level: 0
                },
                tesla: {
                    quantity: 0,
                    level: 0
                },
                xbow: {
                    quantity: 0,
                    level: 0
                },
                inferno: {
                    quantity: 0,
                    level: 0
                },
                clanCastle: {
                    quantity: 1,
                    level: 2
                }
            }
        };
        $scope.townHall.levels[5] = {
            hp: 1500,
            cost: 0,
            build: 0,
            buildings: {
                goldMine: {
                    quantity: 6,
                    level: 10
                },
                elixirPump: {
                    quantity: 6,
                    level: 10
                },
                darkElixirDrill: {
                    quantity: 0,
                    level: 0
                },
                goldStorage: {
                    quantity: 2,
                    level: 10
                },
                elixirStorage: {
                    quantity: 2,
                    level: 10
                },
                darkElixirStorage: {
                    quantity: 0,
                    level: 0
                },
                darkBarracks: {
                    quantity: 0,
                    level: 0
                },
                barracks: {
                    quantity: 3,
                    level: 8
                },
                armyCamps: {
                    quantity: 3,
                    level: 6
                },
                laboratory: {
                    quantity: 1,
                    level: 4
                },
                spellFactory: {
                    quantity: 1,
                    level: 2
                },
                cannon: {
                    quantity: 3,
                    level: 7
                },
                archerTower: {
                    quantity: 3,
                    level: 7
                },
                wall: {
                    quantity: 125,
                    level: 6
                },
                mortar: {
                    quantity: 2,
                    level: 4
                },
                bomb: {
                    quantity: 4,
                    level: 3
                },
                airDefense: {
                    quantity: 1,
                    level: 4
                },
                springTrap: {
                    quantity: 4,
                    level: 1
                },
                wizardTower: {
                    quantity: 2,
                    level: 3
                },
                giantBomb: {
                    quantity: 1,
                    level: 2
                },
                airBomb: {
                    quantity: 2,
                    level: 2
                },
                airMine: {
                    quantity: 0,
                    level: 0
                },
                tesla: {
                    quantity: 0,
                    level: 0
                },
                xbow: {
                    quantity: 0,
                    level: 0
                },
                inferno: {
                    quantity: 0,
                    level: 0
                },
                clanCastle: {
                    quantity: 1,
                    level: 3
                }
            }
        };
        $scope.townHall.levels[6] = {
            hp: 1500,
            cost: 0,
            build: 0,
            buildings: {
                goldMine: {
                    quantity: 6,
                    level: 11
                },
                elixirPump: {
                    quantity: 6,
                    level: 11
                },
                darkElixirDrill: {
                    quantity: 0,
                    level: 0
                },
                goldStorage: {
                    quantity: 2,
                    level: 11
                },
                elixirStorage: {
                    quantity: 2,
                    level: 11
                },
                darkElixirStorage: {
                    quantity: 1,
                    level: 2
                },
                darkBarracks: {
                    quantity: 1,
                    level: 2
                },
                barracks: {
                    quantity: 4,
                    level: 9
                },
                armyCamps: {
                    quantity: 4,
                    level: 6
                },
                laboratory: {
                    quantity: 1,
                    level: 5
                },
                spellFactory: {
                    quantity: 1,
                    level: 3
                },
                cannon: {
                    quantity: 5,
                    level: 8
                },
                archerTower: {
                    quantity: 4,
                    level: 8
                },
                wall: {
                    quantity: 175,
                    level: 7
                },
                mortar: {
                    quantity: 3,
                    level: 4
                },
                bomb: {
                    quantity: 6,
                    level: 5
                },
                airDefense: {
                    quantity: 2,
                    level: 4
                },
                springTrap: {
                    quantity: 4,
                    level: 1
                },
                wizardTower: {
                    quantity: 2,
                    level: 4
                },
                giantBomb: {
                    quantity: 2,
                    level: 2
                },
                airBomb: {
                    quantity: 2,
                    level: 3
                },
                airMine: {
                    quantity: 1,
                    level: 1
                },
                tesla: {
                    quantity: 2,
                    level: 3
                },
                xbow: {
                    quantity: 0,
                    level: 0
                },
                inferno: {
                    quantity: 0,
                    level: 0
                },
                clanCastle: {
                    quantity: 1,
                    level: 3
                }
            }
        };
        $scope.townHall.levels[7] = {
            hp: 1500,
            cost: 0,
            build: 0,
            buildings: {
                goldMine: {
                    quantity: 6,
                    level: 11
                },
                elixirPump: {
                    quantity: 6,
                    level: 11
                },
                darkElixirDrill: {
                    quantity: 1,
                    level: 3
                },
                goldStorage: {
                    quantity: 3,
                    level: 11
                },
                elixirStorage: {
                    quantity: 3,
                    level: 11
                },
                darkElixirStorage: {
                    quantity: 1,
                    level: 6
                },
                darkBarracks: {
                    quantity: 2,
                    level: 5
                },
                barracks: {
                    quantity: 4,
                    level: 10
                },
                armyCamps: {
                    quantity: 4,
                    level: 6
                },
                laboratory: {
                    quantity: 1,
                    level: 6
                },
                spellFactory: {
                    quantity: 1,
                    level: 3
                },
                cannon: {
                    quantity: 5,
                    level: 10
                },
                archerTower: {
                    quantity: 5,
                    level: 10
                },
                wall: {
                    quantity: 225,
                    level: 8
                },
                mortar: {
                    quantity: 3,
                    level: 6
                },
                bomb: {
                    quantity: 6,
                    level: 4
                },
                airDefense: {
                    quantity: 3,
                    level: 6
                },
                springTrap: {
                    quantity: 6,
                    level: 1
                },
                wizardTower: {
                    quantity: 3,
                    level: 6
                },
                giantBomb: {
                    quantity: 3,
                    level: 3
                },
                airBomb: {
                    quantity: 4,
                    level: 3
                },
                airMine: {
                    quantity: 2,
                    level: 1
                },
                tesla: {
                    quantity: 3,
                    level: 6
                },
                xbow: {
                    quantity: 0,
                    level: 0
                },
                inferno: {
                    quantity: 0,
                    level: 0
                },
                clanCastle: {
                    quantity: 1,
                    level: 4
                }
            }
        };
        $scope.townHall.levels[8] = {
            hp: 1500,
            cost: 0,
            build: 0,
            buildings: {
                goldMine: {
                    quantity: 6,
                    level: 11
                },
                elixirPump: {
                    quantity: 6,
                    level: 11
                },
                darkElixirDrill: {
                    quantity: 2,
                    level: 6
                },
                goldStorage: {
                    quantity: 4,
                    level: 11
                },
                elixirStorage: {
                    quantity: 4,
                    level: 11
                },
                darkElixirStorage: {
                    quantity: 1,
                    level: 6
                },
                darkBarracks: {
                    quantity: 2,
                    level: 5
                },
                barracks: {
                    quantity: 4,
                    level: 10
                },
                armyCamps: {
                    quantity: 4,
                    level: 7
                },
                laboratory: {
                    quantity: 1,
                    level: 7
                },
                spellFactory: {
                    quantity: 1,
                    level: 4
                },
                cannon: {
                    quantity: 5,
                    level: 11
                },
                archerTower: {
                    quantity: 6,
                    level: 11
                },
                wall: {
                    quantity: 250,
                    level: 10
                },
                mortar: {
                    quantity: 3,
                    level: 7
                },
                bomb: {
                    quantity: 6,
                    level: 5
                },
                airDefense: {
                    quantity: 4,
                    level: 7
                },
                springTrap: {
                    quantity: 6,
                    level: 1
                },
                wizardTower: {
                    quantity: 4,
                    level: 7
                },
                giantBomb: {
                    quantity: 4,
                    level: 3
                },
                airBomb: {
                    quantity: 4,
                    level: 4
                },
                airMine: {
                    quantity: 4,
                    level: 2
                },
                tesla: {
                    quantity: 4,
                    level: 7
                },
                xbow: {
                    quantity: 2,
                    level: 3
                },
                inferno: {
                    quantity: 0,
                    level: 0
                },
                clanCastle: {
                    quantity: 1,
                    level: 5
                }
            }
        };
        $scope.townHall.levels[9] = {
            hp: 1500,
            cost: 0,
            build: 0,
            buildings: {
                goldMine: {
                    quantity: 7,
                    level: 11
                },
                elixirPump: {
                    quantity: 7,
                    level: 11
                },
                darkElixirDrill: {
                    quantity: 3,
                    level: 6
                },
                goldStorage: {
                    quantity: 4,
                    level: 11
                },
                elixirStorage: {
                    quantity: 4,
                    level: 11
                },
                darkElixirStorage: {
                    quantity: 1,
                    level: 6
                },
                darkBarracks: {
                    quantity: 2,
                    level: 5
                },
                barracks: {
                    quantity: 4,
                    level: 10
                },
                armyCamps: {
                    quantity: 4,
                    level: 8
                },
                laboratory: {
                    quantity: 1,
                    level: 8
                },
                spellFactory: {
                    quantity: 1,
                    level: 5
                },
                cannon: {
                    quantity: 6,
                    level: 12
                },
                archerTower: {
                    quantity: 7,
                    level: 12
                },
                wall: {
                    quantity: 250,
                    level: 11
                },
                mortar: {
                    quantity: 3,
                    level: 8
                },
                bomb: {
                    quantity: 6,
                    level: 5
                },
                airDefense: {
                    quantity: 4,
                    level: 8
                },
                springTrap: {
                    quantity: 6,
                    level: 1
                },
                wizardTower: {
                    quantity: 4,
                    level: 8
                },
                giantBomb: {
                    quantity: 5,
                    level: 4
                },
                airBomb: {
                    quantity: 5,
                    level: 3
                },
                airMine: {
                    quantity: 5,
                    level: 3
                },
                tesla: {
                    quantity: 4,
                    level: 8
                },
                xbow: {
                    quantity: 3,
                    level: 4
                },
                inferno: {
                    quantity: 2,
                    level: 3
                },
                clanCastle: {
                    quantity: 1,
                    level: 6
                }
            }
        };


    }
]).filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});
