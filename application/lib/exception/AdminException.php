<?php
/**
 * Created by PhpStorm.
 * User: mingliang
 * Date: 2018/11/13
 * Time: 10:24 AM
 */

namespace app\lib\exception;


class AdminException extends BaseException
{
    public $code = 401;
    public $msg = '新增账户失败';
    public $errorCode = 30001;


}