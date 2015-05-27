var arr = [
    {'label' : '安徽', 'value' : 'anhui'},
    {'label' : '江苏', 'value' : 'jiangsu'},
    {'label' : '广东', 'value' : 'guangdong'},
    {'label' : '山东', 'value' : 'shandong'},
    {'label' : '湖北', 'value' : 'hubei'},
    {'label' : '吉林', 'value' : 'jilin'},
    {'label' : '黑龙江', 'value' : 'heilongjiang'},
    {'label' : '湖南', 'value' : 'hunan'},
    {'label' : '河北', 'value' : 'heibei'},
    {'label' : '安庆', 'value' : 'anqing'},
    {'label' : '安吉', 'value' : 'anji'},
    {'label' : '安全', 'value' : 'anquan'},
    {'label' : '安安', 'value' : 'anan'},
    {'label' : '海南', 'value' : 'hainan'}
];
var mmm = {
    data : {
        provices : [
           {'province' : '安徽', 'code' : 'anhui'},
           {'province' : '江苏', 'code' : 'jiangsu'},
           {'province' : '广东', 'code' : 'guangdong'},
           {'province' : '山东', 'code' : 'shandong'},
           {'province' : '湖北', 'code' : 'hubei'},
           {'province' : '吉林', 'code' : 'jilin'},
           {'province' : '黑龙江', 'code' : 'heilongjiang'},
           {'province' : '湖南', 'code' : 'hunan'},
           {'province' : '河北', 'code' : 'heibei'},
           {'province' : '安庆', 'code' : 'anqing'},
           {'province' : '安吉', 'code' : 'anji'},
           {'province' : '安全', 'code' : 'anquan'},
           {'province' : '安安', 'code' : 'anan'},
           {'province' : '云南', 'code' : 'yunnan'}
       ]
   }
};

var tabs = {
'title' : '热门城市/国家',
'results' : [{
    'tabname' : 'ABCDEFGH',
    'tabdata' : [{
            'groupname' : 'A',
            'groupdata' : [
                {'label' : '安庆', 'value' : 'AQG'}, 
                {'label' : '阿勒泰', 'value' : 'AAT'}, 
                {'label' : '安康','value' : 'AKA'}, 
                {'label' : '阿克苏','value' : 'AKU'}
            ]
        }, {
            'groupname' : 'B',
            'groupdata' : [{
                    'label' : '包头',
                    'value' : 'BAV'
                }, {
                    'label' : '北海',
                    'value' : 'BHY'
                }, {
                    'label' : '北京',
                    'value' : 'BJS'
                }, {
                    'label' : '百色',
                    'value' : 'AEB'
                }, {
                    'label' : '保山',
                    'value' : 'BSD'
                }
            ]
        }, {
            'groupname' : 'C',
            'groupdata' : [{
                    'label' : '长治',
                    'value' : 'CIH'
                }, {
                    'label' : '长春',
                    'value' : 'CGQ'
                }, {
                    'label' : '常州',
                    'value' : 'CZX'
                }, {
                    'label' : '昌都',
                    'value' : 'BPX'
                }, {
                    'label' : '朝阳',
                    'value' : 'CHG'
                }, {
                    'label' : '常德',
                    'value' : 'CGD'
                }, {
                    'label' : '长白山',
                    'value' : 'NBS'
                }, {
                    'label' : '成都',
                    'value' : 'CTU'
                }, {
                    'label' : '重庆',
                    'value' : 'CKG'
                }, {
                    'label' : '长沙',
                    'value' : 'CSX'
                }, {
                    'label' : '赤峰',
                    'value' : 'CIF'
                }, {
                    'label' : '潮州',
                    'value' : 'SWA'
                }
            ]
        }, {
            'groupname' : 'D',
            'groupdata' : [{
                    'label' : '大同',
                    'value' : 'DAT'
                }, {
                    'label' : '大连',
                    'value' : 'DLC'
                }, {
                    'label' : '达县',
                    'value' : 'DAX'
                }, {
                    'label' : '东营',
                    'value' : 'DOY'
                }, {
                    'label' : '大庆',
                    'value' : 'DQA'
                }, {
                    'label' : '丹东',
                    'value' : 'DDG'
                }, {
                    'label' : '大理',
                    'value' : 'DLU'
                }, {
                    'label' : '敦煌',
                    'value' : 'DNH'
                }, {
                    'label' : '稻城',
                    'value' : 'DCY'
                }
            ]
        }, {
            'groupname' : 'E',
            'groupdata' : [{
                    'label' : '鄂尔多斯',
                    'value' : 'DSN'
                }, {
                    'label' : '恩施',
                    'value' : 'ENH'
                }
            ]
        }, {
            'groupname' : 'F',
            'groupdata' : [{
                    'label' : '福州',
                    'value' : 'FOC'
                }, {
                    'label' : '阜阳',
                    'value' : 'FUG'
                }
            ]
        }, {
            'groupname' : 'G',
            'groupdata' : [{
                    'label' : '贵阳',
                    'value' : 'KWE'
                }, {
                    'label' : '桂林',
                    'value' : 'KWL'
                }, {
                    'label' : '广州',
                    'value' : 'CAN'
                }, {
                    'label' : '广元',
                    'value' : 'GYS'
                }, {
                    'label' : '格尔木',
                    'value' : 'GOQ'
                }
            ]
        }, {
            'groupname' : 'H',
            'groupdata' : [{
                    'label' : '呼和浩特',
                    'value' : 'HET'
                }, {
                    'label' : '哈密',
                    'value' : 'HMI'
                }, {
                    'label' : '黑河',
                    'value' : 'HEK'
                }, {
                    'label' : '海拉尔',
                    'value' : 'HLD'
                }, {
                    'label' : '哈尔滨',
                    'value' : 'HRB'
                }, {
                    'label' : '海口',
                    'value' : 'HAK'
                }, {
                    'label' : '黄山',
                    'value' : 'TXN'
                }, {
                    'label' : '杭州',
                    'value' : 'HGH'
                }, {
                    'label' : '邯郸',
                    'value' : 'HDG'
                }, {
                    'label' : '合肥',
                    'value' : 'HFE'
                }, {
                    'label' : '汉中',
                    'value' : 'HZG'
                }, {
                    'label' : '和田',
                    'value' : 'HTN'
                }
            ]
        }
    ]
}, {
    'tabname' : 'IJKLMNOP',
    'tabdata' : [{
            'groupname' : 'J',
            'groupdata' : [{
                    'label' : '晋江',
                    'value' : 'JJN'
                }, {
                    'label' : '九寨沟',
                    'value' : 'JZH'
                }, {
                    'label' : '锦州',
                    'value' : 'JNZ'
                }, {
                    'label' : '景德镇',
                    'value' : 'JDZ'
                }, {
                    'label' : '嘉峪关',
                    'value' : 'JGN'
                }, {
                    'label' : '井冈山',
                    'value' : 'JGS'
                }, {
                    'label' : '济宁',
                    'value' : 'JNG'
                }, {
                    'label' : '九江',
                    'value' : 'JIU'
                }, {
                    'label' : '佳木斯',
                    'value' : 'JMU'
                }, {
                    'label' : '济南',
                    'value' : 'TNA'
                }, {
                    'label' : '揭阳',
                    'value' : 'SWA'
                }
            ]
        }, {
            'groupname' : 'K',
            'groupdata' : [{
                    'label' : '喀什',
                    'value' : 'KHG'
                }, {
                    'label' : '昆明',
                    'value' : 'KMG'
                }, {
                    'label' : '康定',
                    'value' : 'KGT'
                }, {
                    'label' : '克拉玛依',
                    'value' : 'KRY'
                }, {
                    'label' : '库尔勒',
                    'value' : 'KRL'
                }, {
                    'label' : '库车',
                    'value' : 'KCA'
                }
            ]
        }, {
            'groupname' : 'L',
            'groupdata' : [{
                    'label' : '兰州',
                    'value' : 'LHW'
                }, {
                    'label' : '洛阳',
                    'value' : 'LYA'
                }, {
                    'label' : '丽江',
                    'value' : 'LJG'
                }, {
                    'label' : '林芝',
                    'value' : 'LZY'
                }, {
                    'label' : '柳州',
                    'value' : 'LZH'
                }, {
                    'label' : '泸州',
                    'value' : 'LZO'
                }, {
                    'label' : '连云港',
                    'value' : 'LYG'
                }, {
                    'label' : '黎平',
                    'value' : 'HZH'
                }, {
                    'label' : '连城',
                    'value' : 'LCX'
                }, {
                    'label' : '拉萨',
                    'value' : 'LXA'
                }, {
                    'label' : '临沧',
                    'value' : 'LNJ'
                }, {
                    'label' : '临沂',
                    'value' : 'LYI'
                }
            ]
        }, {
            'groupname' : 'M',
            'groupdata' : [{
                    'label' : '牡丹江',
                    'value' : 'MDG'
                }, {
                    'label' : '芒市',
                    'value' : 'LUM'
                }, {
                    'label' : '满洲里',
                    'value' : 'NZH'
                }, {
                    'label' : '绵阳',
                    'value' : 'MIG'
                }, {
                    'label' : '梅县',
                    'value' : 'MXZ'
                }, {
                    'label' : '漠河',
                    'value' : 'OHE'
                }
            ]
        }, {
            'groupname' : 'N',
            'groupdata' : [{
                    'label' : '南京',
                    'value' : 'NKG'
                }, {
                    'label' : '南充',
                    'value' : 'NAO'
                }, {
                    'label' : '南宁',
                    'value' : 'NNG'
                }, {
                    'label' : '南阳',
                    'value' : 'NNY'
                }, {
                    'label' : '南通',
                    'value' : 'NTG'
                }, {
                    'label' : '那拉提',
                    'value' : 'NLT'
                }, {
                    'label' : '南昌',
                    'value' : 'KHN'
                }, {
                    'label' : '宁波',
                    'value' : 'NGB'
                }
            ]
        }, {
            'groupname' : 'P',
            'groupdata' : [{
                    'label' : '攀枝花',
                    'value' : 'PZI'
                }
            ]
        }
    ]
}, {
    'tabname' : 'QRSTUVWXYZ',
    'tabdata' : [{
            'groupname' : 'Q',
            'groupdata' : [{
                    'label' : '衢州',
                    'value' : 'JUZ'
                }, {
                    'label' : '秦皇岛',
                    'value' : 'SHP'
                }, {
                    'label' : '庆阳',
                    'value' : 'IQN'
                }, {
                    'label' : '齐齐哈尔',
                    'value' : 'NDG'
                }, {
                    'label' : '青岛',
                    'value' : 'TAO'
                }
            ]
        }, {
            'groupname' : 'S',
            'groupdata' : [{
                    'label' : '深圳',
                    'value' : 'SZX'
                }, {
                    'label' : '石家庄',
                    'value' : 'SJW'
                }, {
                    'label' : '三亚',
                    'value' : 'SYX'
                }, {
                    'label' : '沈阳',
                    'value' : 'SHE'
                }, {
                    'label' : '上海',
                    'value' : 'SHA'
                }, {
                    'label' : '思茅',
                    'value' : 'SYM'
                }, {
                    'label' : '汕头',
                    'value' : 'SWA'
                }
            ]
        }, {
            'groupname' : 'T',
            'groupdata' : [{
                    'label' : '铜仁',
                    'value' : 'TEN'
                }, {
                    'label' : '塔城',
                    'value' : 'TCG'
                }, {
                    'label' : '腾冲',
                    'value' : 'TCZ'
                }, {
                    'label' : '台州',
                    'value' : 'HYN'
                }, {
                    'label' : '天津',
                    'value' : 'TSN'
                }, {
                    'label' : '通辽',
                    'value' : 'TGO'
                }, {
                    'label' : '太原',
                    'value' : 'TYN'
                }
            ]
        }, {
            'groupname' : 'W',
            'groupdata' : [{
                    'label' : '威海',
                    'value' : 'WEH'
                }, {
                    'label' : '武汉',
                    'value' : 'WUH'
                }, {
                    'label' : '梧州',
                    'value' : 'WUZ'
                }, {
                    'label' : '文山',
                    'value' : 'WNH'
                }, {
                    'label' : '无锡',
                    'value' : 'WUX'
                }, {
                    'label' : '潍坊',
                    'value' : 'WEF'
                }, {
                    'label' : '武夷山',
                    'value' : 'WUS'
                }, {
                    'label' : '乌兰浩特',
                    'value' : 'HLH'
                }, {
                    'label' : '温州',
                    'value' : 'WNZ'
                }, {
                    'label' : '乌鲁木齐',
                    'value' : 'URC'
                }, {
                    'label' : '万州',
                    'value' : 'WXN'
                }, {
                    'label' : '乌海',
                    'value' : 'WUA'
                }
            ]
        }, {
            'groupname' : 'X',
            'groupdata' : [{
                    'label' : '兴义',
                    'value' : 'ACX'
                }, {
                    'label' : '西昌',
                    'value' : 'XIC'
                }, {
                    'label' : '厦门',
                    'value' : 'XMN'
                }, {
                    'label' : '西安',
                    'value' : 'SIA'
                }, {
                    'label' : '襄樊',
                    'value' : 'XFN'
                }, {
                    'label' : '西宁',
                    'value' : 'XNN'
                }, {
                    'label' : '锡林浩特',
                    'value' : 'XIL'
                }, {
                    'label' : '西双版纳',
                    'value' : 'JHG'
                }, {
                    'label' : '徐州',
                    'value' : 'XUZ'
                }
            ]
        }, {
            'groupname' : 'Y',
            'groupdata' : [{
                    'label' : '义乌',
                    'value' : 'YIW'
                }, {
                    'label' : '永州',
                    'value' : 'LLF'
                }, {
                    'label' : '榆林',
                    'value' : 'UYN'
                }, {
                    'label' : '延安',
                    'value' : 'ENY'
                }, {
                    'label' : '运城',
                    'value' : 'YCU'
                }, {
                    'label' : '烟台',
                    'value' : 'YNT'
                }, {
                    'label' : '银川',
                    'value' : 'INC'
                }, {
                    'label' : '宜昌',
                    'value' : 'YIH'
                }, {
                    'label' : '宜宾',
                    'value' : 'YBP'
                }, {
                    'label' : '盐城',
                    'value' : 'YNZ'
                }, {
                    'label' : '延吉',
                    'value' : 'YNJ'
                }, {
                    'label' : '玉树',
                    'value' : 'YUS'
                }, {
                    'label' : '伊宁',
                    'value' : 'YIN'
                }
            ]
        }, {
            'groupname' : 'Z',
            'groupdata' : [{
                    'label' : '珠海',
                    'value' : 'ZUH'
                }, {
                    'label' : '昭通',
                    'value' : 'ZAT'
                }, {
                    'label' : '张家界',
                    'value' : 'DYG'
                }, {
                    'label' : '舟山',
                    'value' : 'HSN'
                }, {
                    'label' : '郑州',
                    'value' : 'CGO'
                }, {
                    'label' : '中卫',
                    'value' : 'ZHY'
                }, {
                    'label' : '芷江',
                    'value' : 'HJJ'
                }, {
                    'label' : '湛江',
                    'value' : 'ZHA'
                }
            ]
        }
    ]
}
]};



var tabsTest = {
'myTitle' : '热门城市/国家',
'myResults' : [{
    'tabname' : 'ABCDEFGH',
    'tabdata' : [{
            'groupname' : 'A',
            'groupdata' : [{
                    'label' : '安庆',
                    'value' : 'AQG'
                }, {
                    'label' : '阿勒泰',
                    'value' : 'AAT'
                }, {
                    'label' : '安康',
                    'value' : 'AKA'
                }, {
                    'label' : '阿克苏',
                    'value' : 'AKU'
                }
            ]
        }, {
            'groupname' : 'B',
            'groupdata' : [{
                    'label' : '包头',
                    'value' : 'BAV'
                }, {
                    'label' : '北海',
                    'value' : 'BHY'
                }, {
                    'label' : '北京',
                    'value' : 'BJS'
                }, {
                    'label' : '百色',
                    'value' : 'AEB'
                }, {
                    'label' : '保山',
                    'value' : 'BSD'
                }
            ]
        }, {
            'groupname' : 'C',
            'groupdata' : [{
                    'label' : '长治',
                    'value' : 'CIH'
                }, {
                    'label' : '长春',
                    'value' : 'CGQ'
                }, {
                    'label' : '常州',
                    'value' : 'CZX'
                }, {
                    'label' : '昌都',
                    'value' : 'BPX'
                }, {
                    'label' : '朝阳',
                    'value' : 'CHG'
                }, {
                    'label' : '常德',
                    'value' : 'CGD'
                }, {
                    'label' : '长白山',
                    'value' : 'NBS'
                }, {
                    'label' : '成都',
                    'value' : 'CTU'
                }, {
                    'label' : '重庆',
                    'value' : 'CKG'
                }, {
                    'label' : '长沙',
                    'value' : 'CSX'
                }, {
                    'label' : '赤峰',
                    'value' : 'CIF'
                }, {
                    'label' : '潮州',
                    'value' : 'SWA'
                }
            ]
        }, {
            'groupname' : 'D',
            'groupdata' : [{
                    'label' : '大同',
                    'value' : 'DAT'
                }, {
                    'label' : '大连',
                    'value' : 'DLC'
                }, {
                    'label' : '达县',
                    'value' : 'DAX'
                }, {
                    'label' : '东营',
                    'value' : 'DOY'
                }, {
                    'label' : '大庆',
                    'value' : 'DQA'
                }, {
                    'label' : '丹东',
                    'value' : 'DDG'
                }, {
                    'label' : '大理',
                    'value' : 'DLU'
                }, {
                    'label' : '敦煌',
                    'value' : 'DNH'
                }, {
                    'label' : '稻城',
                    'value' : 'DCY'
                }
            ]
        }, {
            'groupname' : 'E',
            'groupdata' : [{
                    'label' : '鄂尔多斯',
                    'value' : 'DSN'
                }, {
                    'label' : '恩施',
                    'value' : 'ENH'
                }
            ]
        }, {
            'groupname' : 'F',
            'groupdata' : [{
                    'label' : '福州',
                    'value' : 'FOC'
                }, {
                    'label' : '阜阳',
                    'value' : 'FUG'
                }
            ]
        }, {
            'groupname' : 'G',
            'groupdata' : [{
                    'label' : '贵阳',
                    'value' : 'KWE'
                }, {
                    'label' : '桂林',
                    'value' : 'KWL'
                }, {
                    'label' : '广州',
                    'value' : 'CAN'
                }, {
                    'label' : '广元',
                    'value' : 'GYS'
                }, {
                    'label' : '格尔木',
                    'value' : 'GOQ'
                }
            ]
        }, {
            'groupname' : 'H',
            'groupdata' : [{
                    'label' : '呼和浩特',
                    'value' : 'HET'
                }, {
                    'label' : '哈密',
                    'value' : 'HMI'
                }, {
                    'label' : '黑河',
                    'value' : 'HEK'
                }, {
                    'label' : '海拉尔',
                    'value' : 'HLD'
                }, {
                    'label' : '哈尔滨',
                    'value' : 'HRB'
                }, {
                    'label' : '海口',
                    'value' : 'HAK'
                }, {
                    'label' : '黄山',
                    'value' : 'TXN'
                }, {
                    'label' : '杭州',
                    'value' : 'HGH'
                }, {
                    'label' : '邯郸',
                    'value' : 'HDG'
                }, {
                    'label' : '合肥',
                    'value' : 'HFE'
                }, {
                    'label' : '汉中',
                    'value' : 'HZG'
                }, {
                    'label' : '和田',
                    'value' : 'HTN'
                }
            ]
        }
    ]
}, {
    'tabname' : 'IJKLMNOP',
    'tabdata' : [{
            'groupname' : 'J',
            'groupdata' : [{
                    'label' : '晋江',
                    'value' : 'JJN'
                }, {
                    'label' : '九寨沟',
                    'value' : 'JZH'
                }, {
                    'label' : '锦州',
                    'value' : 'JNZ'
                }, {
                    'label' : '景德镇',
                    'value' : 'JDZ'
                }, {
                    'label' : '嘉峪关',
                    'value' : 'JGN'
                }, {
                    'label' : '井冈山',
                    'value' : 'JGS'
                }, {
                    'label' : '济宁',
                    'value' : 'JNG'
                }, {
                    'label' : '九江',
                    'value' : 'JIU'
                }, {
                    'label' : '佳木斯',
                    'value' : 'JMU'
                }, {
                    'label' : '济南',
                    'value' : 'TNA'
                }, {
                    'label' : '揭阳',
                    'value' : 'SWA'
                }
            ]
        }, {
            'groupname' : 'K',
            'groupdata' : [{
                    'label' : '喀什',
                    'value' : 'KHG'
                }, {
                    'label' : '昆明',
                    'value' : 'KMG'
                }, {
                    'label' : '康定',
                    'value' : 'KGT'
                }, {
                    'label' : '克拉玛依',
                    'value' : 'KRY'
                }, {
                    'label' : '库尔勒',
                    'value' : 'KRL'
                }, {
                    'label' : '库车',
                    'value' : 'KCA'
                }
            ]
        }, {
            'groupname' : 'L',
            'groupdata' : [{
                    'label' : '兰州',
                    'value' : 'LHW'
                }, {
                    'label' : '洛阳',
                    'value' : 'LYA'
                }, {
                    'label' : '丽江',
                    'value' : 'LJG'
                }, {
                    'label' : '林芝',
                    'value' : 'LZY'
                }, {
                    'label' : '柳州',
                    'value' : 'LZH'
                }, {
                    'label' : '泸州',
                    'value' : 'LZO'
                }, {
                    'label' : '连云港',
                    'value' : 'LYG'
                }, {
                    'label' : '黎平',
                    'value' : 'HZH'
                }, {
                    'label' : '连城',
                    'value' : 'LCX'
                }, {
                    'label' : '拉萨',
                    'value' : 'LXA'
                }, {
                    'label' : '临沧',
                    'value' : 'LNJ'
                }, {
                    'label' : '临沂',
                    'value' : 'LYI'
                }
            ]
        }, {
            'groupname' : 'M',
            'groupdata' : [{
                    'label' : '牡丹江',
                    'value' : 'MDG'
                }, {
                    'label' : '芒市',
                    'value' : 'LUM'
                }, {
                    'label' : '满洲里',
                    'value' : 'NZH'
                }, {
                    'label' : '绵阳',
                    'value' : 'MIG'
                }, {
                    'label' : '梅县',
                    'value' : 'MXZ'
                }, {
                    'label' : '漠河',
                    'value' : 'OHE'
                }
            ]
        }, {
            'groupname' : 'N',
            'groupdata' : [{
                    'label' : '南京',
                    'value' : 'NKG'
                }, {
                    'label' : '南充',
                    'value' : 'NAO'
                }, {
                    'label' : '南宁',
                    'value' : 'NNG'
                }, {
                    'label' : '南阳',
                    'value' : 'NNY'
                }, {
                    'label' : '南通',
                    'value' : 'NTG'
                }, {
                    'label' : '那拉提',
                    'value' : 'NLT'
                }, {
                    'label' : '南昌',
                    'value' : 'KHN'
                }, {
                    'label' : '宁波',
                    'value' : 'NGB'
                }
            ]
        }, {
            'groupname' : 'P',
            'groupdata' : [{
                    'label' : '攀枝花',
                    'value' : 'PZI'
                }
            ]
        }
    ]
}, {
    'tabname' : 'QRSTUVWXYZ',
    'tabdata' : [{
            'groupname' : 'Q',
            'groupdata' : [{
                    'label' : '衢州',
                    'value' : 'JUZ'
                }, {
                    'label' : '秦皇岛',
                    'value' : 'SHP'
                }, {
                    'label' : '庆阳',
                    'value' : 'IQN'
                }, {
                    'label' : '齐齐哈尔',
                    'value' : 'NDG'
                }, {
                    'label' : '青岛',
                    'value' : 'TAO'
                }
            ]
        }, {
            'groupname' : 'S',
            'groupdata' : [{
                    'label' : '深圳',
                    'value' : 'SZX'
                }, {
                    'label' : '石家庄',
                    'value' : 'SJW'
                }, {
                    'label' : '三亚',
                    'value' : 'SYX'
                }, {
                    'label' : '沈阳',
                    'value' : 'SHE'
                }, {
                    'label' : '上海',
                    'value' : 'SHA'
                }, {
                    'label' : '思茅',
                    'value' : 'SYM'
                }, {
                    'label' : '汕头',
                    'value' : 'SWA'
                }
            ]
        }, {
            'groupname' : 'T',
            'groupdata' : [{
                    'label' : '铜仁',
                    'value' : 'TEN'
                }, {
                    'label' : '塔城',
                    'value' : 'TCG'
                }, {
                    'label' : '腾冲',
                    'value' : 'TCZ'
                }, {
                    'label' : '台州',
                    'value' : 'HYN'
                }, {
                    'label' : '天津',
                    'value' : 'TSN'
                }, {
                    'label' : '通辽',
                    'value' : 'TGO'
                }, {
                    'label' : '太原',
                    'value' : 'TYN'
                }
            ]
        }, {
            'groupname' : 'W',
            'groupdata' : [{
                    'label' : '威海',
                    'value' : 'WEH'
                }, {
                    'label' : '武汉',
                    'value' : 'WUH'
                }, {
                    'label' : '梧州',
                    'value' : 'WUZ'
                }, {
                    'label' : '文山',
                    'value' : 'WNH'
                }, {
                    'label' : '无锡',
                    'value' : 'WUX'
                }, {
                    'label' : '潍坊',
                    'value' : 'WEF'
                }, {
                    'label' : '武夷山',
                    'value' : 'WUS'
                }, {
                    'label' : '乌兰浩特',
                    'value' : 'HLH'
                }, {
                    'label' : '温州',
                    'value' : 'WNZ'
                }, {
                    'label' : '乌鲁木齐',
                    'value' : 'URC'
                }, {
                    'label' : '万州',
                    'value' : 'WXN'
                }, {
                    'label' : '乌海',
                    'value' : 'WUA'
                }
            ]
        }, {
            'groupname' : 'X',
            'groupdata' : [{
                    'label' : '兴义',
                    'value' : 'ACX'
                }, {
                    'label' : '西昌',
                    'value' : 'XIC'
                }, {
                    'label' : '厦门',
                    'value' : 'XMN'
                }, {
                    'label' : '西安',
                    'value' : 'SIA'
                }, {
                    'label' : '襄樊',
                    'value' : 'XFN'
                }, {
                    'label' : '西宁',
                    'value' : 'XNN'
                }, {
                    'label' : '锡林浩特',
                    'value' : 'XIL'
                }, {
                    'label' : '西双版纳',
                    'value' : 'JHG'
                }, {
                    'label' : '徐州',
                    'value' : 'XUZ'
                }
            ]
        }, {
            'groupname' : 'Y',
            'groupdata' : [{
                    'label' : '义乌',
                    'value' : 'YIW'
                }, {
                    'label' : '永州',
                    'value' : 'LLF'
                }, {
                    'label' : '榆林',
                    'value' : 'UYN'
                }, {
                    'label' : '延安',
                    'value' : 'ENY'
                }, {
                    'label' : '运城',
                    'value' : 'YCU'
                }, {
                    'label' : '烟台',
                    'value' : 'YNT'
                }, {
                    'label' : '银川',
                    'value' : 'INC'
                }, {
                    'label' : '宜昌',
                    'value' : 'YIH'
                }, {
                    'label' : '宜宾',
                    'value' : 'YBP'
                }, {
                    'label' : '盐城',
                    'value' : 'YNZ'
                }, {
                    'label' : '延吉',
                    'value' : 'YNJ'
                }, {
                    'label' : '玉树',
                    'value' : 'YUS'
                }, {
                    'label' : '伊宁',
                    'value' : 'YIN'
                }
            ]
        }, {
            'groupname' : 'Z',
            'groupdata' : [{
                    'label' : '珠海',
                    'value' : 'ZUH'
                }, {
                    'label' : '昭通',
                    'value' : 'ZAT'
                }, {
                    'label' : '张家界',
                    'value' : 'DYG'
                }, {
                    'label' : '舟山',
                    'value' : 'HSN'
                }, {
                    'label' : '郑州',
                    'value' : 'CGO'
                }, {
                    'label' : '中卫',
                    'value' : 'ZHY'
                }, {
                    'label' : '芷江',
                    'value' : 'HJJ'
                }, {
                    'label' : '湛江',
                    'value' : 'ZHA'
                }
            ]
        }
    ]
}
]};

var tabsArr = [
      {'label' : '安庆','value' : 'AQG'},
      {'label' : '阿勒泰','value' : 'AAT'}, 
      {'label' : '安康','value' : 'AKA'}, 
      {'label' : '阿克苏','value' : 'AKU'}, 
      {'label' : '包头','value' : 'BAV'}, 
      {'label' : '北海','value' : 'BHY'}, 
      {'label' : '北京','value' : 'BJS'}, 
      {'label' : '百色','value' : 'AEB'}, 
      {'label' : '保山','value' : 'BSD'}, 
      {'label' : '长治','value' : 'CIH'}, 
      {'label' : '长春','value' : 'CGQ'}, 
      {'label' : '常州','value' : 'CZX'}, 
      {'label' : '昌都','value' : 'BPX'}, 
      {'label' : '朝阳','value' : 'CHG'}, 
      {'label' : '常德','value' : 'CGD'}, 
      {'label' : '长白山','value' : 'NBS'}, 
      {'label' : '成都','value' : 'CTU'}, 
      {'label' : '重庆','value' : 'CKG'}, 
      {'label' : '长沙','value' : 'CSX'}, 
      {'label' : '赤峰','value' : 'CIF'}, 
      {'label' : '潮州','value' : 'SWA'}, 
      {'label' : '大同','value' : 'DAT'}, 
      {'label' : '大连','value' : 'DLC'}, 
      {'label' : '达县','value' : 'DAX'}, 
      {'label' : '东营','value' : 'DOY'}, 
      {'label' : '大庆','value' : 'DQA'}, 
      {'label' : '丹东','value' : 'DDG'},
      {'label' : '大理','value' : 'DLU'},
      {'label' : '敦煌','value' : 'DNH'}, 
      {'label' : '稻城','value' : 'DCY'},
      {'label' : '鄂尔多斯','value' : 'DSN'}, 
      {'label' : '恩施','value' : 'ENH'},   
      {'label' : '福州','value' : 'FOC'},       
      {'label' : '阜阳','value' : 'FUG'}, 
      {'label' : '贵阳','value' : 'KWE'}, 
      {'label' : '桂林','value' : 'KWL'}, 
      {'label' : '广州','value' : 'CAN'}, 
      {'label' : '广元','value' : 'GYS'}, 
      {'label' : '格尔木','value' : 'GOQ'},
      {'label' : '呼和浩特','value' : 'HET'}, 
      {'label' : '哈密','value' : 'HMI'}, 
      {'label' : '黑河','value' : 'HEK'}, 
      {'label' : '海拉尔','value' : 'HLD'}, 
      {'label' : '哈尔滨','value' : 'HRB'}, 
      {'label' : '海口','value' : 'HAK'}, 
      {'label' : '黄山','value' : 'TXN'}, 
      {'label' : '杭州','value' : 'HGH'}, 
      {'label' : '邯郸','value' : 'HDG'}, 
      {'label' : '合肥','value' : 'HFE'}, 
      {'label' : '汉中','value' : 'HZG'}, 
      {'label' : '和田','value' : 'HTN'}, 
      {'label' : '晋江','value' : 'JJN'}, 
      {'label' : '九寨沟','value' : 'JZH'}, 
      {'label' : '锦州','value' : 'JNZ'}, 
      {'label' : '景德镇','value' : 'JDZ'},
      {'label' : '嘉峪关','value' : 'JGN'}, 
      {'label' : '井冈山','value' : 'JGS'}, 
      {'label' : '济宁','value' : 'JNG'}, 
      {'label' : '九江','value' : 'JIU'}, 
      {'label' : '佳木斯','value' : 'JMU'}, 
      {'label' : '济南','value' : 'TNA'},
      {'label' : '揭阳','value' : 'SWA'}, 
      {'label' : '喀什','value' : 'KHG'}, 
      {'label' : '昆明','value' : 'KMG'}, 
      {'label' : '康定','value' : 'KGT'}, 
      {'label' : '克拉玛依','value' : 'KRY'}, 
      {'label' : '库尔勒','value' : 'KRL'}, 
      {'label' : '库车','value' : 'KCA'}, 
      {'label' : '兰州','value' : 'LHW'}, 
      {'label' : '洛阳','value' : 'LYA'}, 
      {'label' : '丽江','value' : 'LJG'}, 
      {'label' : '林芝','value' : 'LZY'}, 
      {'label' : '柳州','value' : 'LZH'}, 
      {'label' : '泸州','value' : 'LZO'}, 
      {'label' : '连云港','value' : 'LYG'}, 
      {'label' : '黎平','value' : 'HZH'}, 
      {'label' : '连城','value' : 'LCX'}, 
      {'label' : '拉萨','value' : 'LXA'}, 
      {'label' : '临沧','value' : 'LNJ'}, 
      {'label' : '临沂','value' : 'LYI'}, 
      {'label' : '牡丹江','value' : 'MDG'}, 
      {'label' : '芒市','value' : 'LUM'}, 
      {'label' : '满洲里','value' : 'NZH'}, 
      {'label' : '绵阳','value' : 'MIG'}, 
      {'label' : '梅县','value' : 'MXZ'}, 
      {'label' : '漠河','value' : 'OHE'}, 
      {'label' : '南京','value' : 'NKG'}, 
      {'label' : '南充','value' : 'NAO'}, 
      {'label' : '南宁','value' : 'NNG'}, 
      {'label' : '南阳','value' : 'NNY'}, 
      {'label' : '南通','value' : 'NTG'}, 
      {'label' : '那拉提','value' : 'NLT'}, 
      {'label' : '南昌','value' : 'KHN'}, 
      {'label' : '宁波','value' : 'NGB'}, 
      {'label' : '攀枝花','value' : 'PZI'}, 
      {'label' : '衢州','value' : 'JUZ'}, 
      {'label' : '秦皇岛','value' : 'SHP'}, 
      {'label' : '庆阳','value' : 'IQN'}, 
      {'label' : '齐齐哈尔','value' : 'NDG'}, 
      {'label' : '青岛','value' : 'TAO'},
      {'label' : '深圳','value' : 'SZX'}, 
      {'label' : '石家庄','value' : 'SJW'}, 
      {'label' : '三亚','value' : 'SYX'}, 
      {'label' : '沈阳','value' : 'SHE'}, 
      {'label' : '上海','value' : 'SHA'}, 
      {'label' : '思茅','value' : 'SYM'}, 
      {'label' : '汕头','value' : 'SWA'}, 
      {'label' : '铜仁','value' : 'TEN'}, 
      {'label' : '塔城','value' : 'TCG'}, 
      {'label' : '腾冲','value' : 'TCZ'}, 
      {'label' : '台州','value' : 'HYN'}, 
      {'label' : '天津','value' : 'TSN'}, 
      {'label' : '通辽','value' : 'TGO'}, 
      {'label' : '太原','value' : 'TYN'}, 
      {'label' : '威海','value' : 'WEH'}, 
      {'label' : '武汉','value' : 'WUH'}, 
      {'label' : '梧州','value' : 'WUZ'}, 
      {'label' : '文山','value' : 'WNH'}, 
      {'label' : '无锡','value' : 'WUX'}, 
      {'label' : '潍坊','value' : 'WEF'}, 
      {'label' : '武夷山','value' : 'WUS'}, 
      {'label' : '乌兰浩特','value' : 'HLH'},
      {'label' : '温州','value' : 'WNZ'}, 
      {'label' : '乌鲁木齐','value' : 'URC'}, 
      {'label' : '万州','value' : 'WXN'}, 
      {'label' : '乌海','value' : 'WUA'}, 
      {'label' : '兴义','value' : 'ACX'}, 
      {'label' : '西昌','value' : 'XIC'}, 
      {'label' : '厦门','value' : 'XMN'}, 
      {'label' : '西安','value' : 'SIA'}, 
      {'label' : '襄樊','value' : 'XFN'}, 
      {'label' : '西宁','value' : 'XNN'}, 
      {'label' : '锡林浩特','value' : 'XIL'}, 
      {'label' : '西双版纳','value' : 'JHG'},
      {'label' : '徐州','value' : 'XUZ'}, 
      {'label' : '义乌','value' : 'YIW'}, 
      {'label' : '永州','value' : 'LLF'}, 
      {'label' : '榆林','value' : 'UYN'}, 
      {'label' : '延安','value' : 'ENY'}, 
      {'label' : '运城','value' : 'YCU'}, 
      {'label' : '烟台','value' : 'YNT'}, 
      {'label' : '银川','value' : 'INC'}, 
      {'label' : '宜昌','value' : 'YIH'}, 
      {'label' : '宜宾','value' : 'YBP'}, 
      {'label' : '盐城','value' : 'YNZ'}, 
      {'label' : '延吉','value' : 'YNJ'}, 
      {'label' : '玉树','value' : 'YUS'}, 
      {'label' : '伊宁','value' : 'YIN'}, 
      {'label' : '珠海','value' : 'ZUH'}, 
      {'label' : '昭通','value' : 'ZAT'}, 
      {'label' : '张家界','value' : 'DYG'}, 
      {'label' : '舟山','value' : 'HSN'},
      {'label' : '郑州','value' : 'CGO'}, 
      {'label' : '中卫','value' : 'ZHY'}, 
      {'label' : '芷江','value' : 'HJJ'},
      {'label' : '湛江','value' : 'ZHA'}
  ];