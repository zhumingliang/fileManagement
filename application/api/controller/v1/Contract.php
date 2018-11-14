<?php
/**
 * Created by PhpStorm.
 * User: mingliang
 * Date: 2018/11/12
 * Time: 3:20 PM
 */

namespace app\api\controller\v1;


use app\api\controller\BaseController;
use app\api\model\ContractT;
use app\api\service\ContractService;
use app\lib\enum\CommonEnum;
use app\lib\exception\ContractException;
use app\lib\exception\SuccessMessage;

class Contract extends BaseController
{


    /**
     * @api {POST} /api/v1/contract/upload   5-上传合同pdf文件
     * @apiGroup  CMS
     * @apiVersion 1.0.1
     * @apiDescription
     * @apiParam (请求参数说明) {String} file  上传时自定义名称
     * @apiSuccessExample {json} 返回样例:
     * {"msg": "ok","error_code": 0}
     * @apiSuccess (返回参数说明) {int} error_code 错误代码 0 表示没有错误
     * @apiSuccess (返回参数说明) {String} msg 操作结果描述
     *
     * @return \think\response\Json
     * @throws ContractException
     */
    public function uploadPdf()
    {
        $content = request()->file('content');
        $cover = request()->file('cover');
        $res = ContractService::savePdf($content, $cover);
        return json([
            'id' => $res
        ]);
    }

    /**
     * @api {POST} /api/v1/contract/update   6-更新合同信息
     * @apiGroup  CMS
     * @apiVersion 1.0.1
     * @apiDescription  合同识别系统 回调处理合同
     * @apiExample {post}  请求样例:
     * {
     * "id": 1,
     * "name": "合同名称",
     * "pact_number": "合同编号",
     * "company": "公司名称",
     * "money":2000000,
     * "station_code": "a111111"
     * }
     * @apiParam (请求参数说明) {int} id 合同id
     * @apiParam (请求参数说明) {String} name 合同名称
     * @apiParam (请求参数说明) {String} pact_number 合同编号
     * @apiParam (请求参数说明) {String} company 合作单位
     * @apiParam (请求参数说明) {int} money 合同金额（单位：元）
     * @apiParam (请求参数说明) {String} station_code 基站编码
     * @apiSuccessExample {json} 返回样例:
     * {"msg": "ok","error_code": 0}
     * @apiSuccess (返回参数说明) {int} error_code 错误代码 0 表示没有错误
     * @apiSuccess (返回参数说明) {String} msg 操作结果描述
     *
     * @return \think\response\Json
     * @throws ContractException
     */
    public function updateContract()
    {
        $params = $this->request->param();
        $res = ContractT::update($params, ['id' => $params['id']]);
        if (!$res) {
            throw new ContractException(
                ['code' => 401,
                    'msg' => '修改合同信息失败',
                    'errorCode' => 20003
                ]
            );

        }
        return json(new SuccessMessage());

    }

    /**
     * @api {POST} /api/v1/contract/examine  7-管理员-对合同进行审核
     * @apiGroup  CMS
     * @apiVersion 1.0.1
     * @apiDescription  管理员-对合同进行审核
     * @apiExample {post}  请求样例:
     * {
     * "id": 1,
     * "name": "合同名称",
     * "pact_number": "合同编号",
     * "company": "公司名称",
     * "money":2000000,
     * "station_code": "a111111"
     * }
     * @apiParam (请求参数说明) {int} id 合同id
     * @apiParam (请求参数说明) {String} name 合同名称
     * @apiParam (请求参数说明) {String} pact_number 合同编号
     * @apiParam (请求参数说明) {String} company 合作单位
     * @apiParam (请求参数说明) {int} money 合同金额（单位：元）
     * @apiParam (请求参数说明) {String} station_code 基站编码
     * @apiSuccessExample {json} 返回样例:
     * {"msg": "ok","error_code": 0}
     * @apiSuccess (返回参数说明) {int} error_code 错误代码 0 表示没有错误
     * @apiSuccess (返回参数说明) {String} msg 操作结果描述
     *
     */
    public function examineContract()
    {

        $params = $this->request->param();
        $params['state'] = CommonEnum::PASS;
        $res = ContractT::update($params, ['id' => $params['id']]);
        if (!$res) {
            throw new ContractException(
                ['code' => 401,
                    'msg' => '合同审核失败',
                    'errorCode' => 20004
                ]
            );

        }
        return json(new SuccessMessage());
    }

    /**
     * @api {POST} /api/v1/contract/delete   8-管理员-删除合同
     * @apiGroup  CMS
     * @apiVersion 1.0.1
     * @apiDescription  管理员删除合同
     * @apiExample {POST}  请求样例:
     * {
     * "id": 1
     * }
     * @apiParam (请求参数说明) {int} id 合同id
     * @apiSuccessExample {json} 返回样例:
     * {"msg": "ok","error_code": 0}
     * @apiSuccess (返回参数说明) {int} error_code 错误代码 0 表示没有错误
     * @apiSuccess (返回参数说明) {String} msg 操作结果描述
     *
     * @param $id
     * @return \think\response\Json
     * @throws ContractException
     */
    public function deleteContract($id)
    {
        (new ContractService())->delete($id);
        return json(new SuccessMessage());

    }


    /**
     * @api {GET} /api/v1/contract/list/ready  9-获取待处理合同列表
     * @apiGroup  CMS
     * @apiVersion 1.0.1
     * @apiDescription
     * @apiExample {get}  请求样例:
     * http://file.mengant.cn/api/v1/contract/list/ready?page=1&size=10&key=
     * @apiParam (请求参数说明) {int}  page 1
     * @apiParam (请求参数说明) {int}  size 10
     * @apiParam (请求参数说明) {String}  key 关键字查询
     * @apiSuccessExample {json} 返回样例:
     * {"total":1,"per_page":"10","current_page":1,"last_page":1,"data":[{"id":1,"name":"合同名称","pact_number":"a12123121","company":"公司名称","money":20000,"station_code":"123","url":"http:\/\/a","cover":"http:\/\/a"}]}
     * @apiSuccess (返回参数说明) {int} current_page 当前页码
     * @apiSuccess (返回参数说明) {int} total 数据总数
     * @apiSuccess (返回参数说明) {int} per_page 每页多少条数据
     * @apiSuccess (返回参数说明) {int} current_page 当前页码
     * @apiSuccess (返回参数说明) {int} last_page 最后页码
     * @apiSuccess (返回参数说明) {int} id  合同id
     * @apiSuccess (返回参数说明) {String} name  合同名称
     * @apiSuccess (返回参数说明) {String} pact_number  合同编号
     * @apiSuccess (返回参数说明) {String} company  合作单位
     * @apiSuccess (返回参数说明) {String} money  合同金额
     * @apiSuccess (返回参数说明) {String} cover  合同封面
     *
     * @param $page
     * @param $size
     * @param $key
     * @return \think\response\Json
     * @throws \think\exception\DbException
     */
    public function getListWithReady($page, $size, $key = '')
    {

        $list = (new ContractService())->listWithReady($page, $size, $key);
        return json($list);


    }

    /**
     * @api {GET} /api/v1/contract/list/delete  10-获取删除合同列表
     * @apiGroup  CMS
     * @apiVersion 1.0.1
     * @apiDescription
     * @apiExample {get}  请求样例:
     * http://file.mengant.cn/api/v1/contract/list/delete?page=1&size=10&key=
     * @apiParam (请求参数说明) {int}  page 1
     * @apiParam (请求参数说明) {int}  size 10
     * @apiParam (请求参数说明) {String}  key 关键字查询
     * @apiSuccessExample {json} 返回样例:
     * {"total":1,"per_page":"10","current_page":1,"last_page":1,"data":[{"id":1,"name":"合同名称","pact_number":"a12123121","company":"公司名称","money":20000,"station_code":"123","url":"http:\/\/a","cover":"http:\/\/a"}]}
     * @apiSuccess (返回参数说明) {int} current_page 当前页码
     * @apiSuccess (返回参数说明) {int} total 数据总数
     * @apiSuccess (返回参数说明) {int} per_page 每页多少条数据
     * @apiSuccess (返回参数说明) {int} current_page 当前页码
     * @apiSuccess (返回参数说明) {int} last_page 最后页码
     * @apiSuccess (返回参数说明) {int} id  合同id
     * @apiSuccess (返回参数说明) {String} name  合同名称
     * @apiSuccess (返回参数说明) {String} pact_number  合同编号
     * @apiSuccess (返回参数说明) {String} company  合作单位
     * @apiSuccess (返回参数说明) {String} money  合同金额
     * @apiSuccess (返回参数说明) {String} cover  合同封面
     *
     * @param $page
     * @param $size
     * @param $key
     * @return \think\response\Json
     * @throws \think\exception\DbException
     */
    public function getListWithDelete($page, $size, $key = '')
    {

        $list = (new ContractService())->listWithDelete($page, $size, $key);
        return json($list);


    }


    /**
     * @api {GET} /api/v1/contract/list/pass   11-获取审核通过合同列表
     * @apiGroup  CMS
     * @apiVersion 1.0.1
     * @apiDescription
     * @apiExample {get}  请求样例:
     * http://file.mengant.cn/api/v1/contract/list/pass?page=1&size=10&time_begin=2018-11-01&time_end=2018-11-20&key=
     * @apiParam (请求参数说明) {int}  page 1
     * @apiParam (请求参数说明) {int}  size 10
     * @apiParam (请求参数说明) {String}  time_begin 时间查询开始时间
     * @apiParam (请求参数说明) {String}  time_end 时间查询结束时间
     * @apiParam (请求参数说明) {String}  key 关键字查询
     * @apiSuccessExample {json} 返回样例:
     * {"total":1,"per_page":"10","current_page":1,"last_page":1,"data":[{"id":1,"name":"合同名称","pact_number":"a12123121","company":"公司名称","money":20000,"station_code":"123","url":"http:\/\/a","cover":"http:\/\/a"}]}
     * @apiSuccess (返回参数说明) {int} current_page 当前页码
     * @apiSuccess (返回参数说明) {int} total 数据总数
     * @apiSuccess (返回参数说明) {int} per_page 每页多少条数据
     * @apiSuccess (返回参数说明) {int} current_page 当前页码
     * @apiSuccess (返回参数说明) {int} last_page 最后页码
     * @apiSuccess (返回参数说明) {int} id  合同id
     * @apiSuccess (返回参数说明) {String} name  合同名称
     * @apiSuccess (返回参数说明) {String} pact_number  合同编号
     * @apiSuccess (返回参数说明) {String} company  合作单位
     * @apiSuccess (返回参数说明) {String} money  合同金额
     * @apiSuccess (返回参数说明) {String} cover  合同封面
     * @apiSuccess (返回参数说明) {String} url  合同pdf地址(管理员权限才会返回/前端需控制下载按钮显示与隐藏：登录时返回了参数grade：1 | 管理员)
     * @param $page
     * @param $size
     * @param $time_begin
     * @param $time_end
     * @param string $key
     * @return \think\response\Json
     * @throws \app\lib\exception\TokenException
     * @throws \think\Exception
     * @throws \think\exception\DbException
     */
    public function getListWithNormal($page, $size, $time_begin, $time_end, $key = '')
    {

        $list = (new ContractService())->listWithNormal($page, $size, $time_begin, $time_end, $key);
        return json($list);

    }

    /**
     * @api {GET} /api/v1/contract/export  12-导出合同报表
     * @apiGroup  CMS
     * @apiVersion 1.0.1
     * @apiDescription
     * @apiExample {get}  请求样例:
     * http://file.mengant.cn/api/v1/contract/list/pass?time_begin=2018-11-01&time_end=2018-11-20&key=
     * @apiParam (请求参数说明) {String}  time_begin 时间查询开始时间
     * @apiParam (请求参数说明) {String}  time_end 时间查询结束时间
     * @apiParam (请求参数说明) {String}  key 关键字查询
     * @param $time_begin
     * @param $time_end
     * @param string $key
     */
    public function export($time_begin, $time_end, $key = '')
    {
       (new ContractService())->exportContract($time_begin, $time_end, $key);

    }



}