<?php
/**
 * Created by PhpStorm.
 * User: mingliang
 * Date: 2018/11/12
 * Time: 6:38 PM
 */

namespace app\lib\exception;


class ContractException extends BaseException
{
    public $code = 401;
    public $msg = '上传合同pdf失败';
    public $errorCode = 20001;

}