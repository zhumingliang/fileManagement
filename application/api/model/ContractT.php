<?php
/**
 * Created by PhpStorm.
 * User: mingliang
 * Date: 2018/11/12
 * Time: 6:35 PM
 */

namespace app\api\model;


use app\api\service\Token;
use app\lib\enum\CommonEnum;
use think\Model;

class ContractT extends Model
{

    /**
     *  获取待审核合同列表
     * @param $page
     * @param $size
     * @param $key
     * @return array
     * @throws \think\exception\DbException
     */
    public function listWithReady($page, $size, $key)
    {

        $list = self::where('state', CommonEnum::READY)
            ->where(function ($query) use ($key) {
                if ($key) {
                    $query->where('name|pact_number|company|station_code', 'like', '%' . $key . '%');
                }
            })
            ->hidden(['create_time', 'update_time', 'state'])
            ->order('create_time desc')
            ->paginate($size, false, ['page' => $page])->toArray();
        return $list;

    }


    /**
     * 获取删除合同列表
     * @param $page
     * @param $size
     * @param $key
     * @return array
     * @throws \think\exception\DbException
     */
    public function listWithDelete($page, $size, $key)
    {

        $list = self::where('state', CommonEnum::DELETE)
            ->where(function ($query) use ($key) {
                if ($key) {
                    $query->where('name|pact_number|company|station_code', 'like', '%' . $key . '%');
                }
            })
            ->hidden(['create_time', 'update_time', 'state'])
            ->order('create_time desc')
            ->paginate($size, false, ['page' => $page])->toArray();
        return $list;

    }

    /**
     * @param $page
     * @param $size
     * @param $time_begin
     * @param $time_end
     * @param $key
     * @return array
     * @throws \app\lib\exception\TokenException
     * @throws \think\Exception
     * @throws \think\exception\DbException
     */
    public function listWithNormal($page, $size, $time_begin, $time_end, $key)
    {

        $grade = Token::getCurrentTokenVar('grade');
        if ($grade == 1) {
            $hidden = ['create_time', 'update_time', 'state'];
        } else {
            $hidden = ['create_time', 'update_time', 'state', 'url'];
        }
        $time_end = addDay(1, $time_end);
        $list = self::where('state', CommonEnum::PASS)
            ->whereBetweenTime('create_time', $time_begin, $time_end)
            ->where(function ($query) use ($key) {
                if ($key) {
                    $query->where('name|pact_number|company|station_code', 'like', '%' . $key . '%');
                }
            })
            ->hidden($hidden)
            ->paginate($size, false, ['page' => $page])->toArray();
        return $list;
    }


    public function exportContract($time_begin, $time_end, $key)
    {
        $time_end = addDay(1, $time_end);
        $list = self::where('state', CommonEnum::PASS)
            ->whereBetweenTime('create_time', $time_begin, $time_end)
            ->where(function ($query) use ($key) {
                if ($key) {
                    $query->where('name|pact_number|company|station_code', 'like', '%' . $key . '%');
                }
            })
            ->field('id,name,pact_number,company,station_code,money')
            ->select()->toArray();

        return $list;
    }




}