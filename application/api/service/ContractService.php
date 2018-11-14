<?php
/**
 * Created by PhpStorm.
 * User: mingliang
 * Date: 2018/11/12
 * Time: 3:32 PM
 */

namespace app\api\service;


use app\api\controller\v1\Contract;
use app\api\model\ContractT;
use app\lib\enum\CommonEnum;
use app\lib\exception\ContractException;

class ContractService
{


    /**
     * 保存合同pdf
     * @param $file
     * @return mixed
     * @throws ContractException
     */
    public static function savePDF($content, $cover)
    {
        $content_url = self::pdfSave($content);
        $cover_url = self::pdfSave($cover);
        $data['url'] = $content_url;
        $data['cover'] = $cover_url;
        $data['state'] = CommonEnum::READY;
        $contract = ContractT::create($data);
        if (!$contract) {
            throw  new ContractException();
        }
        return $contract->id;
    }


    /**
     * 保存pdf文件
     * @param $file
     * @return string
     * @throws ContractException
     */
    private static function PDFSave($file)
    {
        $path = dirname($_SERVER['SCRIPT_FILENAME']) . '/static/imgs';
        if (!is_dir($path)) {
            mkdir(iconv("UTF-8", "GBK", $path), 0777, true);
        }
        $info = $file->move($path);
        if (!$info) {
            throw  new ContractException(
                ['code' => 401,
                    'msg' => '保存pdf文件失败',
                    'errorCode' => 20002
                ]
            );
        }
        return 'static/imgs' . '/' . $info->getSaveName();
    }

    private function distinguishPDF($url, $id)
    {


    }


    public function delete($ids)
    {
        $params['state'] = CommonEnum::DELETE;
        $res = ContractT::whereIn('id', $ids)->update($params);
        if (!$res) {
            throw new ContractException(
                ['code' => 401,
                    'msg' => '合同删除失败',
                    'errorCode' => 20005
                ]
            );

        }
    }


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

        return (new ContractT())->listWithReady($page, $size, $key);


    }

    /**
     * 获取删除列表
     * @param $page
     * @param $size
     * @param $key
     * @return array
     * @throws \think\exception\DbException
     */

    public function listWithDelete($page, $size, $key)
    {

        return (new ContractT())->listWithDelete($page, $size, $key);


    }

    /**
     * 获取审核通过列表
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

        return (new ContractT())->listWithNormal($page, $size, $time_begin, $time_end, $key);


    }

    public function exportContract($time_begin, $time_end, $key)
    {

        $list= (new ContractT())->exportContract($time_begin, $time_end, $key);

        $header = array(
            '合同ID',
            '合同名称',
            '合同编号',
            '合作单位',
            '基站编码',
            '合同金额'
        );
        $file_name = '合同导出' . '-' . date('Y-m-d', time()) . '.csv';
        $this->put_csv($list, $header, $file_name);

    }

    /**
     * 导出数据到CSV文件
     * @param array $list 数据
     * @param array $title 标题
     * @param string $filename CSV文件名
     */
    public function put_csv($list, $title, $filename)
    {
        $file_name = $filename;
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename=' . $file_name);
        header('Cache-Control: max-age=0');
        $file = fopen('php://output', "a");
        $limit = 1000;
        $calc = 0;
        foreach ($title as $v) {
            $tit[] = iconv('UTF-8', 'GB2312//IGNORE', $v);
        }
        fputcsv($file, $tit);
        foreach ($list as $v) {

            $calc++;
            if ($limit == $calc) {
                ob_flush();
                flush();
                $calc = 0;
            }
            foreach ($v as $t) {
                $t = is_numeric($t) ? $t . "\t" : $t;
                $tarr[] = iconv('UTF-8', 'GB2312//IGNORE', $t);
            }
            fputcsv($file, $tarr);
            unset($tarr);
        }
        unset($list);
        fclose($file);
        exit();
    }


}