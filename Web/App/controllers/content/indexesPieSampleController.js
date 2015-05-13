﻿(function () {
    'use strict';

    var controllerId = 'indexesPieSampleController';
    angular.module('main')
        .controller(controllerId, ['userService', '$rootScope', 'logger', indexesPieSampleController]);

    function indexesPieSampleController(userService, $rootScope, logger) {

        logger = logger.forSource(controllerId);

        var vm = this;
        vm.isAuthenticated = false;
        vm.indexesPie_SampleResourcePoolId = 11;

        // Logged in?
        userService.getUserInfo()
            .then(function (userInfo) {
                vm.isAuthenticated = true;
            });

        // User logged out
        $rootScope.$on('userLoggedOut', function () {
            vm.isAuthenticated = false;
        });
    };
})();
