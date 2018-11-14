<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

Route::get('think', function () {
    return 'hello,ThinkPHP5!';
});

Route::get('hello/:name', 'index/hello');
Route::get('api/:version/index', 'api/:version.Index/index');

Route::get('api/:version/token/admin', 'api/:version.Token/getAdminToken');

Route::post('api/:version/admin/username/update', 'api/:version.Admin/updateUserName');
Route::post('api/:version/admin/pwd/update', 'api/:version.Admin/updatePwd');
Route::post('api/:version/admin/save', 'api/:version.Admin/addAdmin');

Route::post('api/:version/contract/upload', 'api/:version.Contract/uploadPdf');
Route::post('api/:version/contract/update', 'api/:version.Contract/updateContract');
Route::post('api/:version/contract/examine', 'api/:version.Contract/examineContract');
Route::post('api/:version/contract/delete', 'api/:version.Contract/deleteContract');
Route::get('api/:version/contract/list/ready', 'api/:version.Contract/getListWithReady');
Route::get('api/:version/contract/list/delete', 'api/:version.Contract/getListWithDelete');
Route::get('api/:version/contract/list/delete', 'api/:version.Contract/getListWithDelete');
Route::get('api/:version/contract/export', 'api/:version.Contract/export');

