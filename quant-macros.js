(() => {

  var actionCatalog = [
    {
      "type": "player",
      "label": "\u041E\u0431\u043C\u0456\u043D\u044F\u0442\u0438\u0441\u044F",
      "category": "extra",
      "line": 34412,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438",
      "category": "show",
      "line": 34415,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438",
      "category": "show",
      "line": 34418,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u043E\u0437\u043D\u0430\u0439\u043E\u043C\u0438\u0442\u0438\u0441\u044C",
      "category": "extra",
      "line": 34421,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043F\u043E\u0441\u0432\u0456\u0434\u0447\u0435\u043D\u043D\u044F",
      "category": "show",
      "line": 34424,
      "opensMenu": true
    },
    {
      "type": "player",
      "label": "\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438 \u0437\u043D\u0430\u0439\u043E\u043C\u0441\u0442\u0432\u043E",
      "category": "extra",
      "line": 34427,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u043A\u043B\u0438\u043A\u0430\u0442\u0438 \u043D\u0430 \u0434\u0443\u0435\u043B\u044C",
      "category": "extra",
      "line": 34430,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u043F\u0443\u0441\u0442\u0438\u0442\u0438 \u043D\u0430 \u0437\u0435\u043C\u043B\u044E",
      "category": "extra",
      "line": 34433,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0438\u043B\u0456\u0437\u0442\u0438 \u0437 \u0431\u0430\u0433\u0430\u0436\u043D\u0438\u043A\u0443",
      "category": "extra",
      "line": 34436,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0435\u0440\u0435\u0441\u0442\u0430\u0442\u0438 \u0439\u0442\u0438 \u0437\u0430 \u0440\u0443\u0447\u043A\u0443",
      "category": "extra",
      "line": 34442,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0437\u044F\u0442\u0438 \u043D\u0430 \u0441\u0435\u0431\u0435",
      "category": "extra",
      "line": 34445,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0437\u044F\u0442\u0438\u0441\u044C \u0437\u0430 \u0440\u0443\u0447\u043A\u0443",
      "category": "extra",
      "line": 34448,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0422\u044F\u0433\u0442\u0438 \u043D\u0430 \u0441\u043E\u0431\u0456",
      "category": "gov",
      "line": 34451,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u0435\u0440\u0435\u0434\u0430\u0442\u0438 \u0433\u0440\u043E\u0448\u0456",
      "category": "extra",
      "line": 34455,
      "opensMenu": true
    },
    {
      "type": "player",
      "label": "\u0417\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u0442\u0438 \u043A\u0438\u043D\u0443\u0442\u0438 \u043A\u0456\u0441\u0442\u043A\u0438",
      "category": "extra",
      "line": 34458,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u043B\u0456\u043A\u0443\u0432\u0430\u0442\u0438 \u0430\u043F\u0442\u0435\u0447\u043A\u043E\u044E",
      "category": "extra",
      "line": 34461,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u0434\u043E \u0431\u0440\u0438\u0433\u0430\u0434\u0438",
      "category": "extra",
      "line": 34464,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u0456\u0431\u0440\u0430\u0442\u0438 \u0437\u0431\u0440\u043E\u044E",
      "category": "crime",
      "line": 34467,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u043E\u0433\u0440\u0430\u0431\u0443\u0432\u0430\u0442\u0438",
      "category": "crime",
      "line": 34470,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u043E\u0431\u0440\u0438\u0442\u0438",
      "category": "crime",
      "line": 34473,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0442\u0438 \u0432\u0456\u0434\u043C\u0438\u0447\u043A\u0443",
      "category": "crime",
      "line": 34476,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u0432\u2019\u044F\u0437\u0430\u0442\u0438 \u0441\u0442\u044F\u0436\u043A\u043E\u044E",
      "category": "crime",
      "line": 34479,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u0432i\u043B\u044C\u043D\u0438\u0442\u0438 \u0437 \u0432\u2019\u044F\u0437\u043D\u0438\u0446i",
      "category": "crime",
      "line": 34482,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041E\u0434\u044F\u0433\u043D\u0443\u0442\u0438 \u043C\u0456\u0448\u043E\u043A",
      "category": "crime",
      "line": 34485,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u043D\u044F\u0442\u0438 \u043C\u0456\u0448\u043E\u043A",
      "category": "crime",
      "line": 34488,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u0433\u043D\u0430\u0442\u0438 \u0437 \u0431\u0440\u0438\u0433\u0430\u0434\u0438",
      "category": "extra",
      "line": 34491,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u0434\u043E \u0441\u0456\u043C\u2019\u0457",
      "category": "extra",
      "line": 34494,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u0434\u043E \u0444\u0456\u0440\u043C\u0438",
      "category": "extra",
      "line": 34497,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u0434\u043E \u0444\u0440\u0430\u043A\u0446\u0456\u0457",
      "category": "gov",
      "line": 34500,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u0434\u0430\u0442\u0438 \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u0438\u0439 \u043A\u0432\u0438\u0442\u043E\u043A",
      "category": "gov",
      "line": 34503,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u043B\u0443\u0447\u0438\u0442\u0438 \u0437\u0431\u0440\u043E\u044E",
      "category": "gov",
      "line": 34507,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u0456\u0440\u0432\u0430\u0442\u0438 \u043C\u0430\u0441\u043A\u0443",
      "category": "gov",
      "line": 34511,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u0456\u0434\u0432\u0438\u0449\u0438\u0442\u0438 \u0443 \u0440\u0430\u043D\u0437\u0456",
      "category": "gov",
      "line": 34514,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438 \u0432 \u0440\u0430\u043D\u0437\u0456",
      "category": "gov",
      "line": 34517,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u0433\u043D\u0430\u0442\u0438 \u0456\u0437 \u0441\u0456\u043C\u2019\u0457",
      "category": "extra",
      "line": 34520,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u0456\u0434\u0432\u0438\u0449\u0438\u0442\u0438 \u0440\u0430\u043D\u0433",
      "category": "extra",
      "line": 34523,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438 \u0440\u0430\u043D\u0433",
      "category": "extra",
      "line": 34526,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u0433\u043D\u0430\u0442\u0438 \u0456\u0437 \u0444\u0456\u0440\u043C\u0438",
      "category": "extra",
      "line": 34529,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u0456\u0434\u0432\u0438\u0449\u0438\u0442\u0438 \u0440\u0430\u043D\u0433 \u0444\u0456\u0440\u043C\u0438",
      "category": "extra",
      "line": 34532,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438 \u0440\u0430\u043D\u0433 \u0444\u0456\u0440\u043C\u0438",
      "category": "extra",
      "line": 34535,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u0433\u043D\u0430\u0442\u0438 \u0456\u0437 \u0444\u0440\u0430\u043A\u0446\u0456\u0457",
      "category": "gov",
      "line": 34538,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u0430\u043A\u043B\u044E\u0447\u0438\u0442\u0438 \u0441\u043E\u044E\u0437",
      "category": "gov",
      "line": 34541,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0420\u043E\u0437\u0442\u043E\u0440\u0433\u043D\u0443\u0442\u0438 \u0441\u043E\u044E\u0437",
      "category": "gov",
      "line": 34544,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0434\u044F\u0433\u0442\u0438 \u043A\u0430\u0439\u0434\u0430\u043D\u043A\u0438",
      "category": "gov",
      "line": 34547,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u043D\u044F\u0442\u0438 \u043A\u0430\u0439\u0434\u0430\u043D\u043A\u0438",
      "category": "gov",
      "line": 34551,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u0440\u0438\u0432\u2019\u044F\u0437\u0430\u0442\u0438",
      "category": "crime",
      "line": 34555,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0456\u0434\u0432\u2019\u044F\u0437\u0430\u0442\u0438",
      "category": "crime",
      "line": 34559,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0424\u0440\u0430\u043A\u0446\u0456\u044F",
      "category": "gov",
      "line": 34563,
      "opensMenu": true
    },
    {
      "type": "player",
      "label": "\u0421\u0456\u043C\u2019\u044F",
      "category": "extra",
      "line": 34571,
      "opensMenu": true
    },
    {
      "type": "player",
      "label": "\u0424\u0456\u0440\u043C\u0430",
      "category": "extra",
      "line": 34574,
      "opensMenu": true
    },
    {
      "type": "player",
      "label": "\u0406\u043D\u0448\u0435",
      "category": "extra",
      "line": 34577,
      "opensMenu": true
    },
    {
      "type": "player",
      "label": "\u041E\u0431\u0448\u0443\u043A\u0430\u0442\u0438",
      "category": "gov",
      "line": 34580,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041A\u043E\u043D\u0444\u0456\u0441\u043A\u0430\u0446\u0456\u044F \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u0439",
      "category": "gov",
      "line": 34583,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438",
      "category": "show",
      "line": 34587,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u0434\u0430\u0442\u0438 \u043C\u0435\u0434.\u043A\u0430\u0440\u0442\u0443",
      "category": "gov",
      "line": 34590,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u0434\u0430\u0442\u0438 \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u044E \u043D\u0430 \u0437\u0431\u0440\u043E\u044E",
      "category": "gov",
      "line": 34594,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u0434\u0430\u0442\u0438 \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u044E \u043D\u0430 \u043F\u043E\u043B\u044E\u0432\u0430\u043D\u043D\u044F",
      "category": "gov",
      "line": 34597,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u0434\u0430\u0442\u0438 \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u044E \u043D\u0430 \u0440\u0438\u0431\u0430\u043B\u043A\u0443",
      "category": "gov",
      "line": 34600,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u043B\u0443\u0447\u0438\u0442\u0438 \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u0435",
      "category": "gov",
      "line": 34603,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u0434\u0430\u0442\u0438 \u0440\u043E\u0437\u0448\u0443\u043A",
      "category": "gov",
      "line": 34607,
      "opensMenu": true
    },
    {
      "type": "player",
      "label": "\u0422\u044F\u0433\u043D\u0443\u0442\u0438 \u0437\u0430 \u0441\u043E\u0431\u043E\u044E",
      "category": "gov",
      "line": 34611,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u0432\u0456\u043B\u044C\u043D\u0438\u0442\u0438",
      "category": "gov",
      "line": 34614,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u0430\u043F\u0445\u0430\u0442\u0438 \u0432 \u0430\u0432\u0442\u043E",
      "category": "gov",
      "line": 34617,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0417\u0430\u043F\u0445\u0430\u0442\u0438 \u0432 \u0431\u0430\u0433\u0430\u0436\u043D\u0438\u043A",
      "category": "crime",
      "line": 34625,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u043F\u0438\u0441\u0430\u0442\u0438 \u0448\u0442\u0440\u0430\u0444",
      "category": "gov",
      "line": 34633,
      "opensMenu": true
    },
    {
      "type": "player",
      "label": "\u0412\u0438\u043B\u0443\u0447\u0438\u0442\u0438 \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u0438\u0439 \u043A\u0432\u0438\u0442\u043E\u043A",
      "category": "gov",
      "line": 34637,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0410\u0440\u0435\u0448\u0442\u0443\u0432\u0430\u0442\u0438",
      "category": "gov",
      "line": 34641,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u0440\u043E\u0434\u0430\u0442\u0438 \u043F\u0456\u0433\u0443\u043B\u043A\u0438",
      "category": "gov",
      "line": 34645,
      "opensMenu": true
    },
    {
      "type": "player",
      "label": "\u041F\u0440\u043E\u0434\u0430\u0442\u0438 \u0430\u043F\u0442\u0435\u0447\u043A\u0443",
      "category": "gov",
      "line": 34651,
      "opensMenu": true
    },
    {
      "type": "player",
      "label": "\u041F\u0440\u043E\u0434\u0430\u0442\u0438 \u0432\u0456\u0442\u0430\u043C\u0456\u043D\u0438",
      "category": "gov",
      "line": 34657,
      "opensMenu": true
    },
    {
      "type": "player",
      "label": "\u041F\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u044F",
      "category": "gov",
      "line": 34663,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0420\u0435\u0430\u043D\u0456\u043C\u0443\u0432\u0430\u0442\u0438",
      "category": "gov",
      "line": 34667,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041E\u0431\u0456\u0439\u043D\u044F\u0442\u0438",
      "category": "extra",
      "line": 34671,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u043E\u0446\u0456\u043B\u0443\u0432\u0430\u0442\u0438",
      "category": "extra",
      "line": 34674,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0414\u0430\u0442\u0438 \u043B\u044F\u043F\u043E\u0441\u0430",
      "category": "extra",
      "line": 34677,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0414\u0430\u0442\u0438 \u043F\u2019\u044F\u0442\u044C",
      "category": "extra",
      "line": 34680,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C \xABAPT\xBB",
      "category": "extra",
      "line": 34683,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C \xABHSKT Lee Hi\xBB",
      "category": "extra",
      "line": 34686,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u043E\u0437\u0430 \xABLove Wallpaper\xBB",
      "category": "extra",
      "line": 34689,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C \xABSome\xBB",
      "category": "extra",
      "line": 34692,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C \xABHSKT\xBB",
      "category": "extra",
      "line": 34695,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C \xABI Got A Feeling\xBB",
      "category": "extra",
      "line": 34698,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u043E\u0446\u0456\u043B\u0443\u043D\u043E\u043A \u0432 \u043E\u0431\u0456\u0439\u043C\u0430\u0445",
      "category": "extra",
      "line": 34701,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u0430\u0440\u043D\u0438\u0439 \u0442\u0430\u043D\u0435\u0446\u044C \xABSpot\xBB",
      "category": "extra",
      "line": 34704,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041F\u043E\u043D\u0435\u0441\u0442\u0438 \u043D\u0430 \u0440\u0443\u043A\u0430\u0445",
      "category": "extra",
      "line": 34707,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C \xABPerfect\xBB",
      "category": "extra",
      "line": 34710,
      "opensMenu": false
    },
    {
      "type": "player",
      "label": "\u041E\u0431\u0456\u0439\u043C\u0438 \u0441\u0442\u043E\u044F\u0447\u0438",
      "category": "extra",
      "line": 34713,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u0439",
      "category": "extra",
      "line": 34716,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0445\u043C\u0443\u0440\u0438\u0439",
      "category": "extra",
      "line": 34719,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0435\u0440\u0434\u0438\u0442\u0438\u0439",
      "category": "extra",
      "line": 34722,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0429\u0430\u0441\u043B\u0438\u0432\u0438\u0439",
      "category": "extra",
      "line": 34725,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430\u0439\u0442\u0438 \u0434\u043E \u0431\u0443\u0434\u0438\u043D\u043A\u0443",
      "category": "extra",
      "line": 34728,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0438\u0439\u0442\u0438 \u043D\u0430 \u0432\u0443\u043B\u0438\u0446\u044E",
      "category": "extra",
      "line": 34731,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
      "category": "extra",
      "line": 34734,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u0440e\u0441",
      "category": "extra",
      "line": 34737,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0435\u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u0438\u0439",
      "category": "extra",
      "line": 34740,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u2019\u044F\u043D\u0438\u0439",
      "category": "extra",
      "line": 34743,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0441\u0442\u0440\u0430\u0436\u0434\u0430\u043B\u0438\u0439",
      "category": "extra",
      "line": 34746,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0432\u0438\u0447\u0430\u0439\u043D\u0430",
      "category": "extra",
      "line": 34749,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0425\u043E\u0440\u043E\u0431\u0440\u0430",
      "category": "extra",
      "line": 34752,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0423\u043F\u0435\u0432\u043D\u0435\u043D\u0430",
      "category": "extra",
      "line": 34755,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u0440\u0443\u0442\u0430",
      "category": "extra",
      "line": 34758,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0432\u0438\u0434\u043A\u0430",
      "category": "extra",
      "line": 34761,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0443\u043C\u043D\u0430",
      "category": "extra",
      "line": 34764,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u0440\u0438\u043B\u0430\u0442\u0430",
      "category": "extra",
      "line": 34767,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u2019\u044F\u043D\u0430",
      "category": "extra",
      "line": 34770,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0435\u043A\u0441\u0443\u0430\u043B\u044C\u043D\u0430",
      "category": "extra",
      "line": 34773,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041B\u0456\u0442\u043D\u044F",
      "category": "extra",
      "line": 34776,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u0430\u043F\u0456\u0432\u043B\u0435\u0436\u0430\u0447\u0438",
      "category": "extra",
      "line": 34779,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0456\u0441\u0442\u0438 \u043D\u0430\u0432\u043F\u043E\u0447\u0456\u043F\u043A\u0438",
      "category": "extra",
      "line": 34782,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u0430 \u0437\u0435\u043C\u043B\u0456",
      "category": "extra",
      "line": 34785,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041B\u0435\u0433\u0442\u0438 \u043D\u0430 \u0437\u0435\u043C\u043B\u044E",
      "category": "extra",
      "line": 34788,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0430\u043B\u044F\u0442\u0438\u0441\u044F \u043D\u0430 \u0437\u0435\u043C\u043B\u0456",
      "category": "extra",
      "line": 34791,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0441\u0442\u0430\u0442\u0438 \u043D\u0430 \u043A\u043E\u043B\u0456\u043D\u043E",
      "category": "extra",
      "line": 34794,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u0441\u043F\u043E\u043A\u0456\u0439\u043D\u043E",
      "category": "extra",
      "line": 34797,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0456\u0441\u0442\u0438 \u043D\u0430 \u0441\u0445\u043E\u0434\u0438",
      "category": "extra",
      "line": 34800,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430\u0441\u043C\u0430\u0433\u0430\u0442\u0438 \u043D\u0430 \u0436\u0438\u0432\u043E\u0442\u0456",
      "category": "extra",
      "line": 34803,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430\u0441\u043C\u0430\u0433\u0430\u0442\u0438 \u043D\u0430 \u0441\u043F\u0438\u043D\u0456",
      "category": "extra",
      "line": 34806,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0456\u0434\u043D\u044F\u0442\u0438 \u0440\u0443\u043A\u0438",
      "category": "extra",
      "line": 34809,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041E\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u0442\u0430 \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u0438",
      "category": "extra",
      "line": 34812,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0430\u043B\u0435\u0446\u044C \u0432\u0433\u043E\u0440\u0443",
      "category": "extra",
      "line": 34815,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u0435 \u043F\u0440\u0438\u0432\u0456\u0442\u0430\u043D\u043D\u044F",
      "category": "extra",
      "line": 34818,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u0440\u0443\u0442\u0438\u0442\u0438 \u0431\u0456\u043B\u044F \u0441\u043A\u0440\u043E\u043D\u0456 \u0434\u0432\u043E\u043C\u0430 \u0440\u0443\u043A\u0430\u043C\u0438",
      "category": "extra",
      "line": 34821,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u043E\u0440\u043E\u043B\u0456\u0432\u0441\u044C\u043A\u0435 \u043F\u0440\u0438\u0432\u0456\u0442\u0430\u043D\u043D\u044F",
      "category": "extra",
      "line": 34824,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043D\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F",
      "category": "extra",
      "line": 34827,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0434\u0432\u0456\u0439\u043D\u0438\u0439 \u043B\u0430\u0439\u043A",
      "category": "extra",
      "line": 34830,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u043B\u044F\u043A\u0430\u0442\u0438",
      "category": "extra",
      "line": 34833,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0434\u0430\u0442\u0438\u0441\u044C",
      "category": "extra",
      "line": 34836,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0432\u0456\u043B\u044C\u043D\u043E \u043F\u043B\u0435\u0441\u043A\u0430\u0442\u0438",
      "category": "extra",
      "line": 34839,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0438\u0440",
      "category": "extra",
      "line": 34842,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0456\u0434\u043C\u043E\u0432\u0430",
      "category": "extra",
      "line": 34845,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u0430\u0434\u0456\u0441\u0442\u044C",
      "category": "extra",
      "line": 34848,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0440\u0438\u0431\u043A\u0443",
      "category": "extra",
      "line": 34851,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0424\u0435\u0439\u0441\u043F\u0430\u043B\u043C",
      "category": "extra",
      "line": 34854,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043A\u0443\u0440\u043E\u0447\u043A\u0443",
      "category": "extra",
      "line": 34857,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u041E\u041A",
      "category": "extra",
      "line": 34860,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u043B\u0438\u043A\u0430\u0442\u0438 \u0437\u0430 \u0441\u043E\u0431\u043E\u044E",
      "category": "extra",
      "line": 34863,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u041E\u041A",
      "category": "extra",
      "line": 34866,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u0438\u0439 \u043F\u043E\u0446\u0456\u043B\u0443\u043D\u043E\u043A",
      "category": "extra",
      "line": 34869,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0438\u043A\u0438\u043D\u0443\u0442\u0438 \u0441\u0438\u0433\u0443",
      "category": "extra",
      "line": 34872,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043F\u0456\u0434\u0456\u0439\u0442\u0438",
      "category": "extra",
      "line": 34875,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0413\u0440\u0430\u0442\u0438 \u043D\u0430 \u0433\u0456\u0442\u0430\u0440\u0456",
      "category": "extra",
      "line": 34878,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0413\u0440\u0430\u0442\u0438 \u043D\u0430 \u043F\u0456\u0430\u043D\u0456\u043D\u043E",
      "category": "extra",
      "line": 34881,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0438\u0440 \u0443\u0441\u0456\u043C",
      "category": "extra",
      "line": 34884,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430\u0440\u044F\u0434\u043A\u0430 1",
      "category": "extra",
      "line": 34887,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430\u0440\u044F\u0434\u043A\u0430 2",
      "category": "extra",
      "line": 34890,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u0430\u0447\u0430\u0442\u0438 \u043F\u0440\u0435\u0441",
      "category": "extra",
      "line": 34893,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0456\u0434\u0436\u0438\u043C\u0430\u0442\u0438\u0441\u044F",
      "category": "extra",
      "line": 34896,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0435\u0434\u0438\u0442\u0443\u0432\u0430\u0442\u0438",
      "category": "extra",
      "line": 34899,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0425\u043E\u0434\u044C\u0431\u0430 \u043D\u0430 \u043C\u0456\u0441\u0446\u0456",
      "category": "extra",
      "line": 34902,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0441\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u0430\u043B\u0435\u0446\u044C",
      "category": "extra",
      "line": 34905,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0449\u043E\u0441\u044C \u0449\u0435",
      "category": "extra",
      "line": 34908,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u043E\u0432\u0438\u0440\u044F\u0442\u0438\u0441\u044F \u0443 \u043D\u043E\u0441\u0456",
      "category": "extra",
      "line": 34911,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0441\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u0430\u043B\u0435\u0446\u044C \u0443\u0441\u0456\u043C",
      "category": "extra",
      "line": 34914,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0441\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u0430\u043B\u0435\u0446\u044C \u0437\u0430\u0442\u044F\u0442\u043E",
      "category": "extra",
      "line": 34917,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0430\u0442\u0438 \u043A\u043E\u0433\u043E\u0441\u044C",
      "category": "extra",
      "line": 34920,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u0430\u0442\u0438 \u0440\u0430\u043A\u043E\u043C",
      "category": "extra",
      "line": 34923,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0427\u0435\u0441\u0430\u0442\u0438 \u0437\u0430\u0434",
      "category": "extra",
      "line": 34926,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041E\u0431\u0441\u0441\u0430\u0442\u0438",
      "category": "extra",
      "line": 34929,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0431\u0438\u0442\u0438\u0441\u044C",
      "category": "extra",
      "line": 34932,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430\u0439\u043D\u044F\u0442\u0438\u0441\u044F \u0441\u0435\u043A\u0441\u043E\u043C",
      "category": "extra",
      "line": 34935,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u0443\u043A\u0438 \u043D\u0430 \u043F\u043E\u044F\u0441\u0456",
      "category": "extra",
      "line": 34938,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u043E\u0437\u0456\u043C\u2019\u044F\u0442\u0438 \u0440\u0443\u043A\u0438",
      "category": "extra",
      "line": 34941,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0445\u0440\u0435\u0441\u0442\u0438\u0442\u0438 \u0440\u0443\u043A\u0438 \u043D\u0430 \u0433\u0440\u0443\u0434\u044F\u0445",
      "category": "extra",
      "line": 34944,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u043E\u0433\u043D\u0430\u0442\u0438 \u043B\u044E\u0434\u0438\u043D\u0443",
      "category": "extra",
      "line": 34947,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0456\u0434\u043C\u043E\u0432\u0438\u0442\u0438 \u0443 \u043F\u0440\u043E\u0445\u043E\u0434\u0456",
      "category": "extra",
      "line": 34950,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0431\u0456\u0446\u0435\u043F\u0441 1",
      "category": "extra",
      "line": 34953,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0431\u0456\u0446\u0435\u043F\u0441 2",
      "category": "extra",
      "line": 34956,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0431\u0456\u0446\u0435\u043F\u0441 3",
      "category": "extra",
      "line": 34959,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0431\u0456\u0446\u0435\u043F\u0441 4",
      "category": "extra",
      "line": 34962,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0431\u0456\u0446\u0435\u043F\u0441 5",
      "category": "extra",
      "line": 34965,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0431\u0456\u0446\u0435\u043F\u0441 6",
      "category": "extra",
      "line": 34968,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0443\u0440\u043D\u0438\u0442\u0438\u0441\u044F",
      "category": "extra",
      "line": 34971,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u0443\u043A\u0438 \u0432\u0433\u043E\u0440\u0443",
      "category": "extra",
      "line": 34974,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0432\u0438\u0441\u0442\u0456\u0442\u0438 \u0456 \u043C\u0430\u0445\u0430\u0442\u0438 \u0440\u0443\u043A\u043E\u044E",
      "category": "extra",
      "line": 34977,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430\u0432\u043E\u0434\u0438\u0442\u0438 \u043D\u0430\u0442\u043E\u0432\u043F",
      "category": "extra",
      "line": 34980,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0430\u043D\u0456\u043A\u0430",
      "category": "extra",
      "line": 34983,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0413\u0440\u0456\u0442\u0438\u0441\u044C \u0431\u0456\u043B\u044F \u0432\u043E\u0433\u043D\u0438\u0449\u0430",
      "category": "extra",
      "line": 34986,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u0456\u0439\u043A\u0430 \u043E\u0445\u043E\u0440\u043E\u043D\u0446\u044F",
      "category": "extra",
      "line": 34989,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u0440\u0443\u0448\u0443\u0432\u0430\u0442\u0438 \u0437 \u0441\u0435\u0431\u0435 \u043F\u0438\u043B",
      "category": "extra",
      "line": 34992,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u0430\u0447\u0430\u0442\u0438\u0441\u044F",
      "category": "extra",
      "line": 34995,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0438\u0441\u0456\u0442\u0438 \u043D\u0430 \u0442\u0443\u0440\u043D\u0456\u043A\u0443",
      "category": "extra",
      "line": 34998,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u043E\u0437\u043C\u0438\u043D\u043A\u0430",
      "category": "extra",
      "line": 35001,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u043E\u0437\u043C\u0438\u043D\u043A\u0430 2",
      "category": "extra",
      "line": 35004,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u043E\u0437\u043C\u0438\u043D\u043A\u0430 3",
      "category": "extra",
      "line": 35007,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u043E\u0437\u043C\u0438\u043D\u043A\u0430 4",
      "category": "extra",
      "line": 35010,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0431\u0456\u0446\u0435\u043F\u0441 7",
      "category": "extra",
      "line": 35013,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0435\u0434\u0438\u0442\u0443\u0432\u0430\u0442\u0438 2",
      "category": "extra",
      "line": 35016,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0435\u0434\u0438\u0442\u0443\u0432\u0430\u0442\u0438 3",
      "category": "extra",
      "line": 35019,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0435\u0434\u0438\u0442\u0443\u0432\u0430\u0442\u0438 4",
      "category": "extra",
      "line": 35022,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0435\u0434\u0438\u0442\u0443\u0432\u0430\u0442\u0438 5",
      "category": "extra",
      "line": 35025,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0435\u0434\u0438\u0442\u0443\u0432\u0430\u0442\u0438 6",
      "category": "extra",
      "line": 35028,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0435\u0434\u0438\u0442\u0443\u0432\u0430\u0442\u0438 7",
      "category": "extra",
      "line": 35031,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0435\u0434\u0438\u0442\u0443\u0432\u0430\u0442\u0438 8",
      "category": "extra",
      "line": 35034,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0419\u043E\u0433\u0430",
      "category": "extra",
      "line": 35037,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0419\u043E\u0433\u0430 2",
      "category": "extra",
      "line": 35040,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0419\u043E\u0433\u0430 3",
      "category": "extra",
      "line": 35043,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0419\u043E\u0433\u0430 4",
      "category": "extra",
      "line": 35046,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0419\u043E\u0433\u0430 5",
      "category": "extra",
      "line": 35049,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u0438\u0439 \u043F\u043E\u0446\u0456\u043B\u0443\u043D\u043E\u043A 2",
      "category": "extra",
      "line": 35052,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u0438\u0439 \u043F\u043E\u0446\u0456\u043B\u0443\u043D\u043E\u043A 3",
      "category": "extra",
      "line": 35055,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u0438\u0439 \u043F\u043E\u0446\u0456\u043B\u0443\u043D\u043E\u043A 4",
      "category": "extra",
      "line": 35058,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0440\u0438\u043C\u0430\u0442\u0438 \u0433\u0440\u0443\u0434\u0438",
      "category": "extra",
      "line": 35061,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0449\u043E\u0441\u044C",
      "category": "extra",
      "line": 35064,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0430\u0442\u0438 \u043A\u043E\u0433\u043E\u0441\u044C 2",
      "category": "extra",
      "line": 35067,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0430\u0432\u0430\u0442\u0438 \u043A\u043E\u043C\u0443\u0441\u044C",
      "category": "extra",
      "line": 35070,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0435\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0430 \u043F\u043E\u0437\u0430",
      "category": "extra",
      "line": 35073,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0432\u0456\u043B\u044C\u043D\u0456 \u0440\u0443\u0445\u0438",
      "category": "extra",
      "line": 35076,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u0439 \u0442\u0430\u043D\u0435\u0446\u044C",
      "category": "extra",
      "line": 35079,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u0439 \u0442\u0430\u043D\u0435\u0446\u044C 2",
      "category": "extra",
      "line": 35082,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u0439 \u0442\u0430\u043D\u0435\u0446\u044C 3",
      "category": "extra",
      "line": 35085,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u0439 \u0442\u0430\u043D\u0435\u0446\u044C 4",
      "category": "extra",
      "line": 35088,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u0439 \u0442\u0430\u043D\u0435\u0446\u044C 5",
      "category": "extra",
      "line": 35091,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u0439 \u0442\u0430\u043D\u0435\u0446\u044C 6",
      "category": "extra",
      "line": 35094,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u0439 \u0442\u0430\u043D\u0435\u0446\u044C 7",
      "category": "extra",
      "line": 35097,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0430 \u0436\u0435\u0440\u0434\u0438\u043D\u0456",
      "category": "extra",
      "line": 35100,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u0456\u043B\u044F \u0441\u0442\u0456\u043D\u0438",
      "category": "extra",
      "line": 35103,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u0456\u043B\u044F \u0441\u0442\u0456\u043D\u0438 2",
      "category": "extra",
      "line": 35106,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u0456\u043B\u044F \u0441\u0442\u0456\u043D\u0438 3",
      "category": "extra",
      "line": 35109,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u043F\u0435\u0440\u0442\u0438\u0441\u044F",
      "category": "extra",
      "line": 35112,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u043F\u0435\u0440\u0442\u0438\u0441\u044F 2",
      "category": "extra",
      "line": 35115,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0445\u0440\u0435\u0441\u0442\u0438\u0442\u0438 \u0440\u0443\u043A\u0438",
      "category": "extra",
      "line": 35118,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0445\u0440\u0435\u0441\u0442\u0438\u0442\u0438 \u0440\u0443\u043A\u0438 2",
      "category": "extra",
      "line": 35121,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u043F\u0435\u0440\u0442\u0438\u0441\u044F 3",
      "category": "extra",
      "line": 35124,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u043F\u0435\u0440\u0442\u0438\u0441\u044F 4",
      "category": "extra",
      "line": 35127,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0456\u0434\u043D\u044F\u0442\u0438 \u0440\u0443\u043A\u0438 \u043D\u0430 \u043A\u043E\u043B\u0435\u043D\u0430\u0445",
      "category": "extra",
      "line": 35130,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u043E\u044F\u0442\u0438\u0441\u044F",
      "category": "extra",
      "line": 35133,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u043E\u044F\u0442\u0438\u0441\u044F 2",
      "category": "extra",
      "line": 35136,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u0440\u0435\u0441",
      "category": "extra",
      "line": 35139,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u0443\u043A\u0438 \u0437\u0430 \u0441\u043F\u0438\u043D\u0443",
      "category": "extra",
      "line": 35142,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0437\u0430 \u043E\u0445\u043E\u0440\u043E\u043D\u043D\u0438\u043A\u0430",
      "category": "extra",
      "line": 35145,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0435\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u043D\u043E",
      "category": "extra",
      "line": 35148,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430\u0440\u0443\u0447\u043D\u0438\u043A",
      "category": "extra",
      "line": 35151,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u043E\u043B\u044F\u0447\u0435",
      "category": "extra",
      "line": 35154,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u043F\u0430\u0442\u0438",
      "category": "extra",
      "line": 35157,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0435\u0432\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u043E \u0441\u0442\u043E\u044F\u0442\u0438",
      "category": "extra",
      "line": 35160,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0435\u0432\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u043E \u0441\u0442\u043E\u044F\u0442\u0438 2",
      "category": "extra",
      "line": 35163,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0435\u0432\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u043E \u0441\u0442\u043E\u044F\u0442\u0438 3",
      "category": "extra",
      "line": 35166,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u043E\u044F\u0442\u0438 \u0432\u0430\u0436\u043A\u043E",
      "category": "extra",
      "line": 35169,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u043E\u044F\u0442\u0438 \u0422\u0440\u0435\u0432\u043E\u0440",
      "category": "extra",
      "line": 35172,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u043E\u044F\u0442\u0438 \u0441\u043E\u0440\u043E\u043C\u043D\u043E",
      "category": "extra",
      "line": 35175,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u043E\u044F\u0442\u0438 \u0432\u0438\u043D\u043D\u0438\u043C",
      "category": "extra",
      "line": 35178,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u043E\u044F\u0442\u0438 \u0432\u0438\u043D\u043D\u0438\u043C 2",
      "category": "extra",
      "line": 35181,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u043E\u044F\u0442\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u043D\u043E",
      "category": "extra",
      "line": 35184,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u0443 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
      "category": "extra",
      "line": 35187,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u043E\u044F\u0442\u0438 \u0441\u0443\u043C\u043D\u043E",
      "category": "extra",
      "line": 35190,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u0443\u043A\u0438 \u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0438",
      "category": "extra",
      "line": 35193,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041B\u0435\u0436\u0430\u0442\u0438 \u043F\u043E\u0440\u0430\u043D\u0435\u043D\u0438\u043C",
      "category": "extra",
      "line": 35196,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041B\u0435\u0436\u0430\u0442\u0438 \u0437\u0432\u2019\u044F\u0437\u0430\u043D\u0438\u043C",
      "category": "extra",
      "line": 35199,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422-\u041F\u043E\u0437\u0430",
      "category": "extra",
      "line": 35202,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u043E\u044F\u0442\u0438 \u043D\u0435\u0440\u0432\u0443\u044E\u0447\u0438",
      "category": "extra",
      "line": 35205,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0438\u0431\u0438\u0432\u0430\u043B\u0430",
      "category": "extra",
      "line": 35208,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0413\u043E\u0442\u043E\u0432\u0438\u0439 \u0434\u043E \u0431\u0456\u0439\u043A\u0438",
      "category": "extra",
      "line": 35211,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041E\u0431\u0443\u0440\u0438\u0442\u0438\u0441\u044F",
      "category": "extra",
      "line": 35214,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u043B\u0438\u0442\u0438\u0441\u044F",
      "category": "extra",
      "line": 35217,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430\u0441\u043F\u043E\u043A\u043E\u0457\u0442\u0438",
      "category": "extra",
      "line": 35220,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0430\u0443",
      "category": "extra",
      "line": 35223,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0432\u0430\u0433\u0430",
      "category": "extra",
      "line": 35226,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0406 \u043A\u0440\u0430\u043F\u043A\u0430",
      "category": "extra",
      "line": 35229,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u043E \u0437\u0430 \u043D\u0430\u0445",
      "category": "extra",
      "line": 35232,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0426\u0435 \u043C\u043E\u0454!",
      "category": "extra",
      "line": 35235,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0432\u0456\u043B\u044C\u043D\u0435 \u043D\u0456",
      "category": "extra",
      "line": 35238,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0427\u043E\u0440\u0442",
      "category": "extra",
      "line": 35241,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0456\u0434\u0432\u0430\u043B\u0438",
      "category": "extra",
      "line": 35244,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0456\u043B\u044C\u043A\u0438 \u043D\u0435 \u0446\u0435",
      "category": "extra",
      "line": 35247,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0456\u0434\u043C\u043E\u0432\u0438\u0442\u0438",
      "category": "extra",
      "line": 35250,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0426\u0435 \u044F",
      "category": "extra",
      "line": 35253,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430 \u043C\u043D\u043E\u044E \u0433\u0440\u0443\u0431\u043E",
      "category": "extra",
      "line": 35256,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0438!",
      "category": "extra",
      "line": 35259,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u0435\u0437 \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0456\u0432",
      "category": "extra",
      "line": 35262,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041E \u0442\u0430\u043A!",
      "category": "extra",
      "line": 35265,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0456\u0448\u043B\u0438 \u0441\u044E\u0434\u0438",
      "category": "extra",
      "line": 35268,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u0443\u0432\u0430\u0439",
      "category": "extra",
      "line": 35271,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0438 \u0432\u043F\u043E\u0440\u0430\u0454\u043C\u043E\u0441\u044C",
      "category": "extra",
      "line": 35274,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0440\u044F\u0434\u043E\u043A",
      "category": "extra",
      "line": 35277,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0435\u043B\u0438\u043A\u0438\u0439 \u043B\u0430\u0439\u043A",
      "category": "extra",
      "line": 35280,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u043E\u0437\u0447\u0430\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F",
      "category": "extra",
      "line": 35283,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0424\u0435\u0439\u0441\u043F\u0430\u043B\u043C 2",
      "category": "extra",
      "line": 35286,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u043E\u0432\u0441\u0456\u043C \u043A\u0443\u043A\u0443",
      "category": "extra",
      "line": 35289,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0438\u043D\u043D\u0438\u0439",
      "category": "extra",
      "line": 35292,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0413\u0435\u043D\u0433\u0441\u0442\u0430 \u0441\u043F\u0456\u043B\u043A\u0443\u0432\u0430\u043D\u043D\u044F",
      "category": "extra",
      "line": 35295,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0425\u0435\u0439! \u041F\u0440\u0438\u0432\u0456\u0442!",
      "category": "extra",
      "line": 35298,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0432\u0438\u0441\u043D\u0443\u0442\u0438 \u043C\u0430\u0445\u043D\u0443\u0432 \u0440\u0443\u043A\u043E\u044E",
      "category": "extra",
      "line": 35301,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0430\u0432\u0430\u0439, \u0434\u043E\u043F\u043E\u0431\u043E\u0447\u0435\u043D\u043D\u044F!",
      "category": "extra",
      "line": 35304,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0430\u0442\u0438 \u043F\u2019\u044F\u0442\u044C \u0441\u0442\u043E\u044F\u0447\u0438",
      "category": "extra",
      "line": 35307,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0433\u043E\u0434\u0438\u0442\u0438\u0441\u044C",
      "category": "extra",
      "line": 35310,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u043E\u044F\u0442\u0438!",
      "category": "extra",
      "line": 35313,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0413\u0443\u0434",
      "category": "extra",
      "line": 35316,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0443\u043F\u0435\u0440",
      "category": "extra",
      "line": 35319,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430\u0441\u043F\u043E\u043A\u043E\u0439\u0441\u044F",
      "category": "extra",
      "line": 35322,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0413\u0430\u0440\u043D\u0430 \u0456\u0434\u0435\u044F",
      "category": "extra",
      "line": 35325,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u0447\u0430\u0441",
      "category": "extra",
      "line": 35328,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0435\u0447\u0430\u0442\u0430\u0442\u0438",
      "category": "extra",
      "line": 35331,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u0443\u043A\u0430\u0442\u0438 \u0443 \u0434\u0432\u0435\u0440\u0456",
      "category": "extra",
      "line": 35334,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0427\u0443\u0445\u0430\u0442\u0438 \u0437\u0430\u0434",
      "category": "extra",
      "line": 35337,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0442\u0435\u0440\u0442\u0438 \u0434\u043E\u043B\u043E\u043D\u0456",
      "category": "extra",
      "line": 35340,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0443\u043A\u0430\u0442\u0438 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0443",
      "category": "extra",
      "line": 35343,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043A\u043B\u043E\u043D\u0438\u0442\u0438\u0441\u044C",
      "category": "extra",
      "line": 35346,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0438\u0442\u0438 \u043A\u0430\u043F\u043E\u0442",
      "category": "extra",
      "line": 35349,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "Press F",
      "category": "extra",
      "line": 35352,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u043F\u0456\u043B\u043A\u0443\u0432\u0430\u0442\u0438\u0441\u044C \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443",
      "category": "extra",
      "line": 35355,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u043B\u0430\u0433\u043E\u0434\u0438\u0442\u0438 \u0449\u043E\u0441\u044C",
      "category": "extra",
      "line": 35358,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041E\u0433\u043B\u044F\u0434\u0430\u0442\u0438 \u043D\u0430 \u0437\u0435\u043C\u043B\u0456",
      "category": "extra",
      "line": 35361,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043B\u0435\u0441\u043A\u0430\u0442\u0438 \u0443 \u0434\u043E\u043B\u043E\u043D\u0456",
      "category": "extra",
      "line": 35364,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0423\u0432\u0430\u0436\u043D\u043E \u0434\u0443\u043C\u0430\u0442\u0438",
      "category": "extra",
      "line": 35367,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u043D\u0438\u0437\u0430\u0442\u0438 \u043F\u043B\u0435\u0447\u0438\u043C\u0430",
      "category": "extra",
      "line": 35370,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 1",
      "category": "extra",
      "line": 35373,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 2",
      "category": "extra",
      "line": 35376,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 3",
      "category": "extra",
      "line": 35379,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 4",
      "category": "extra",
      "line": 35382,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 5",
      "category": "extra",
      "line": 35385,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 6",
      "category": "extra",
      "line": 35388,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 7",
      "category": "extra",
      "line": 35391,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 8",
      "category": "extra",
      "line": 35394,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 9",
      "category": "extra",
      "line": 35397,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 10",
      "category": "extra",
      "line": 35400,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 11",
      "category": "extra",
      "line": 35403,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 12",
      "category": "extra",
      "line": 35406,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 13",
      "category": "extra",
      "line": 35409,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 14",
      "category": "extra",
      "line": 35412,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 15",
      "category": "extra",
      "line": 35415,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 16",
      "category": "extra",
      "line": 35418,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 17",
      "category": "extra",
      "line": 35421,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 18",
      "category": "extra",
      "line": 35424,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 19",
      "category": "extra",
      "line": 35427,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 20",
      "category": "extra",
      "line": 35430,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 21",
      "category": "extra",
      "line": 35433,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 22",
      "category": "extra",
      "line": 35436,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 23",
      "category": "extra",
      "line": 35439,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 24",
      "category": "extra",
      "line": 35442,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 25",
      "category": "extra",
      "line": 35445,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 26",
      "category": "extra",
      "line": 35448,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 27",
      "category": "extra",
      "line": 35451,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0427\u0435\u0447\u0456\u0442\u043A\u0430",
      "category": "extra",
      "line": 35454,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0456\u0434\u0456\u0440\u0432\u0430\u0442\u0438\u0441\u044C \u043F\u043E \u043F\u043E\u0432\u043D\u0456\u0439",
      "category": "extra",
      "line": 35457,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0456\u0434\u0456\u0440\u0432\u0430\u0442\u0438\u0441\u044C \u043F\u043E \u043F\u043E\u0432\u043D\u0456\u0439 2",
      "category": "extra",
      "line": 35460,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0456\u0447\u043D\u0438\u0439 \u043A\u043B\u0443\u0431",
      "category": "extra",
      "line": 35463,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0456\u0447\u043D\u0438\u0439 \u043A\u043B\u0443\u0431 2",
      "category": "extra",
      "line": 35466,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0456\u0447\u043D\u0438\u0439 \u043A\u043B\u0443\u0431 3",
      "category": "extra",
      "line": 35469,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0456\u0447\u043D\u0438\u0439 \u043A\u043B\u0443\u0431 4",
      "category": "extra",
      "line": 35472,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0456\u0447\u043D\u0438\u0439 \u043A\u043B\u0443\u0431 5",
      "category": "extra",
      "line": 35475,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0456\u0447\u043D\u0438\u0439 \u043A\u043B\u0443\u0431 6",
      "category": "extra",
      "line": 35478,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0456\u0447\u043D\u0438\u0439 \u043A\u043B\u0443\u0431 7",
      "category": "extra",
      "line": 35481,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430",
      "category": "extra",
      "line": 35484,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 2",
      "category": "extra",
      "line": 35487,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0415\u0440\u043E\u0442\u0438\u0447\u043D\u0438\u0439",
      "category": "extra",
      "line": 35490,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0415\u043D\u0435\u0440\u0433\u0456\u044F \u0440\u0443\u043A\u0430\u043C\u0438",
      "category": "extra",
      "line": 35493,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0435\u0432\u043C\u0456\u043B\u0438\u0439",
      "category": "extra",
      "line": 35496,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043B\u0430\u0432\u043D\u0438\u0439",
      "category": "extra",
      "line": 35499,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043B\u0430\u0432\u043D\u0438\u0439 2",
      "category": "extra",
      "line": 35502,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043B\u0430\u0432\u043D\u0438\u0439 3",
      "category": "extra",
      "line": 35505,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 1",
      "category": "extra",
      "line": 35508,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 2",
      "category": "extra",
      "line": 35511,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 3",
      "category": "extra",
      "line": 35514,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 4",
      "category": "extra",
      "line": 35517,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 5",
      "category": "extra",
      "line": 35520,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 6",
      "category": "extra",
      "line": 35523,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 7",
      "category": "extra",
      "line": 35526,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 8",
      "category": "extra",
      "line": 35529,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 9",
      "category": "extra",
      "line": 35532,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 10",
      "category": "extra",
      "line": 35535,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 11",
      "category": "extra",
      "line": 35538,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 12",
      "category": "extra",
      "line": 35541,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 13",
      "category": "extra",
      "line": 35544,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 14",
      "category": "extra",
      "line": 35547,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 15",
      "category": "extra",
      "line": 35550,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 16",
      "category": "extra",
      "line": 35553,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 17",
      "category": "extra",
      "line": 35556,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 18",
      "category": "extra",
      "line": 35559,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 19",
      "category": "extra",
      "line": 35562,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 20",
      "category": "extra",
      "line": 35565,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 21",
      "category": "extra",
      "line": 35568,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 22",
      "category": "extra",
      "line": 35571,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 23",
      "category": "extra",
      "line": 35574,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 24",
      "category": "extra",
      "line": 35577,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 25",
      "category": "extra",
      "line": 35580,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 26",
      "category": "extra",
      "line": 35583,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B 27",
      "category": "extra",
      "line": 35586,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 28",
      "category": "extra",
      "line": 35589,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 29",
      "category": "extra",
      "line": 35592,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 30",
      "category": "extra",
      "line": 35595,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 31",
      "category": "extra",
      "line": 35598,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u043C\u0456\u0439\u043A\u0430",
      "category": "extra",
      "line": 35601,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430 \u0431\u0430\u0440\u043D\u043E\u044E \u0441\u0442\u0456\u0439\u043A\u043E\u044E",
      "category": "extra",
      "line": 35604,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430 \u0431\u0430\u0440\u043D\u043E\u044E \u0441\u0442\u0456\u0439\u043A\u043E\u044E 2",
      "category": "extra",
      "line": 35607,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430 \u0431\u0430\u0440\u043D\u043E\u044E \u0441\u0442\u0456\u0439\u043A\u043E\u044E 3",
      "category": "extra",
      "line": 35610,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430 \u0431\u0430\u0440\u043D\u043E\u044E \u0441\u0442\u0456\u0439\u043A\u043E\u044E 4",
      "category": "extra",
      "line": 35613,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0423 \u0432\u0456\u0434\u0440\u0438\u0432\u0456",
      "category": "extra",
      "line": 35616,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0423 \u0432\u0456\u0434\u0440\u0438\u0432\u0456 2",
      "category": "extra",
      "line": 35619,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 32",
      "category": "extra",
      "line": 35622,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0456\u0434\u0436\u0435\u0439",
      "category": "extra",
      "line": 35625,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u043E\u0437\u0432\u2019\u044F\u0437\u043D\u0438\u0439",
      "category": "extra",
      "line": 35628,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0440\u044F\u0441\u0442\u0438 \u0440\u0443\u043A\u0430\u043C\u0438",
      "category": "extra",
      "line": 35631,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C \u0437\u0430\u0439\u0447\u0438\u043A\u0430",
      "category": "extra",
      "line": 35634,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0424\u043B\u0435\u043A\u0441 \u043F\u0440\u0430\u0432\u043E\u044E \u0440\u0443\u043A\u043E\u044E",
      "category": "extra",
      "line": 35637,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0424\u043B\u0435\u043A\u0441 \u0434\u0432\u043E\u043C\u0430 \u0440\u0443\u043A\u0430\u043C\u0438",
      "category": "extra",
      "line": 35640,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0435\u0440\u0442\u0438\u0445\u0432\u0456\u0441\u0442\u043A\u0430",
      "category": "extra",
      "line": 35643,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0435\u0440\u0442\u0438\u0445\u0432\u0456\u0441\u0442\u043A\u0430 2",
      "category": "extra",
      "line": 35646,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u043B\u0443\u0431\u043D\u0430",
      "category": "extra",
      "line": 35649,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u043B\u0443\u0431\u043D\u0430 2",
      "category": "extra",
      "line": 35652,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u0443\u0445\u0430\u0442\u0438 \u043A\u0443\u043B\u0430\u043A\u0430\u043C\u0438",
      "category": "extra",
      "line": 35655,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0425\u0430\u0441\u043B\u0438\u0442\u0438",
      "category": "extra",
      "line": 35658,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u043B\u0443\u0431\u043D\u0430 3",
      "category": "extra",
      "line": 35661,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u043B\u0443\u0431\u043D\u0430 4",
      "category": "extra",
      "line": 35664,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u043B\u0443\u0431\u043D\u0430 5",
      "category": "extra",
      "line": 35667,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u043B\u0443\u0431\u043D\u0430 6",
      "category": "extra",
      "line": 35670,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u043B\u0443\u0431\u043D\u0430 7",
      "category": "extra",
      "line": 35673,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u043B\u0443\u0431\u043D\u0430 8",
      "category": "extra",
      "line": 35676,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u043B\u0443\u0431\u043D\u0430 9",
      "category": "extra",
      "line": 35679,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0446\u044E\u0432\u0430\u0442\u0438 \u0437 \u043D\u0430\u043F\u043E\u0454\u043C",
      "category": "extra",
      "line": 35682,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u043E\u0441\u0456 \u0421\u043B\u0430\u0439\u0434",
      "category": "extra",
      "line": 35685,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u043D\u0443\u043F\u0434\u043E\u0433\u0456\u0434\u043E\u0433",
      "category": "extra",
      "line": 35688,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u0438\u043B\u044C \u0436\u0443\u0440\u0430\u0432\u043B\u044F",
      "category": "extra",
      "line": 35691,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C \u043B\u0443\u0437\u0435\u0440\u0430",
      "category": "extra",
      "line": 35694,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C \u043A\u0443\u0440\u0447\u0430\u0442\u0438",
      "category": "extra",
      "line": 35697,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041B\u0435\u0439\u0442 \u0415\u043B\u043E\u043C\u0440",
      "category": "extra",
      "line": 35700,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u042F \u043D\u0435 \u0431\u043E\u044E\u0441\u044C",
      "category": "extra",
      "line": 35703,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u0456 \u0422\u0456 \u0421\u0456",
      "category": "extra",
      "line": 35706,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0424\u043B\u0435\u043A\u0441",
      "category": "extra",
      "line": 35709,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u0456\u043B\u043B\u0456 \u0411\u0430\u0443\u043D\u0441",
      "category": "extra",
      "line": 35712,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0413\u043E\u043F\u0430\u043A\u0430 \u0437 \u0441\u0442\u0440\u0438\u0431\u043A\u043E\u043C",
      "category": "extra",
      "line": 35715,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u0443\u0433\u0456-\u0432\u0443\u0433\u0456",
      "category": "extra",
      "line": 35718,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u043E\u0432\u0431\u043E\u0439",
      "category": "extra",
      "line": 35721,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u0430\u0443\u043D\u0441",
      "category": "extra",
      "line": 35724,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0456\u0441\u043A\u043E",
      "category": "extra",
      "line": 35727,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u043F\u0435\u0432\u043D\u0435\u043D\u0438\u0439 \u0432 \u0441\u043E\u0431\u0456",
      "category": "extra",
      "line": 35730,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0430\u0445\u0430\u0442\u0438 \u0440\u0443\u043A\u0430\u043C\u0438",
      "category": "extra",
      "line": 35733,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0424\u0440\u0435\u0448\u043C\u0435\u043D",
      "category": "extra",
      "line": 35736,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041E\u043F\u0430 \u0433\u0430\u043D\u0433\u043C\u0435\u043D \u0441\u0442\u0430\u0439\u043B!",
      "category": "extra",
      "line": 35739,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0425\u0456\u043F-\u0445\u043E\u043F",
      "category": "extra",
      "line": 35742,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u043F\u0440\u0430\u0432\u0436\u043D\u0456\u0439 \u0444\u043B\u043E\u0443",
      "category": "extra",
      "line": 35745,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C \u0436\u0430\u0431\u043A\u0438",
      "category": "extra",
      "line": 35748,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0446\u044E\u0432\u0430\u0442\u0438 \u043D\u043E\u0433\u0430\u043C\u0438",
      "category": "extra",
      "line": 35751,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417 \u043F\u0435\u0440\u0435\u0433\u043E\u0440\u0442\u0430\u043D\u043D\u044F\u043C",
      "category": "extra",
      "line": 35754,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0438\u0437\u044C\u043A\u0438\u0439 \u0444\u043B\u0454\u043A\u0441",
      "category": "extra",
      "line": 35757,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0430\u043A\u0430\u0440\u0435\u043D\u0430",
      "category": "extra",
      "line": 35760,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u0444\u043B",
      "category": "extra",
      "line": 35763,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041E\u0441\u0456\u0434\u043B\u0430\u0442\u0438 \u043A\u043E\u0433\u043E\u0441\u044C",
      "category": "extra",
      "line": 35766,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0443\u0436\u0435 \u043C\u043E\u0434\u043D\u0438\u0439",
      "category": "extra",
      "line": 35769,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u043E\u0442\u0435\u0441\u0442",
      "category": "extra",
      "line": 35772,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u0443\u0440\u044F\u0447\u0456 \u043A\u0440\u0438\u043B\u044C\u0446\u044F",
      "category": "extra",
      "line": 35775,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 33",
      "category": "extra",
      "line": 35778,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0415\u043B\u0435\u043A\u0442\u0440\u043E",
      "category": "extra",
      "line": 35781,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 34",
      "category": "extra",
      "line": 35784,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 35",
      "category": "extra",
      "line": 35787,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 36",
      "category": "extra",
      "line": 35790,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 37",
      "category": "extra",
      "line": 35793,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 38",
      "category": "extra",
      "line": 35796,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0438\u0432\u0438\u0441\u044C \u043D\u0430 \u043C\u043E\u0457 \u0448\u043A\u0430\u0440\u043F\u0435\u0442\u043A\u0438",
      "category": "extra",
      "line": 35799,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 39",
      "category": "extra",
      "line": 35802,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 40",
      "category": "extra",
      "line": 35805,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 41",
      "category": "extra",
      "line": 35808,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 42",
      "category": "extra",
      "line": 35811,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 43",
      "category": "extra",
      "line": 35814,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 (\u0423\u043F\u0435\u0432\u043D\u0435\u043D\u043E)",
      "category": "extra",
      "line": 35817,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 (\u0423\u043F\u0435\u0432\u043D\u0435\u043D\u043E) 2",
      "category": "extra",
      "line": 35820,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u0430 \u0431\u043E\u0440\u0434\u044E\u0440\u0456",
      "category": "extra",
      "line": 35823,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 (\u041F\u0441\u0438\u0445\u043E\u043B\u043E\u0433)",
      "category": "extra",
      "line": 35826,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 (\u0427\u0456\u043B\u043B)",
      "category": "extra",
      "line": 35829,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E",
      "category": "extra",
      "line": 35832,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u0441\u0445\u0440\u0435\u0441\u0442\u0438\u0432 \u0440\u0443\u043A\u0438",
      "category": "extra",
      "line": 35835,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438",
      "category": "extra",
      "line": 35838,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 2",
      "category": "extra",
      "line": 35841,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u0430 \u043F\u043B\u044F\u0436\u0456",
      "category": "extra",
      "line": 35844,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u0430 \u0442\u0443\u0430\u043B\u0435\u0442\u0456",
      "category": "extra",
      "line": 35847,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u0430 \u043F\u043B\u044F\u0436\u0456 2",
      "category": "extra",
      "line": 35850,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u0430 \u043F\u043B\u044F\u0436\u0456 3",
      "category": "extra",
      "line": 35853,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u0430 \u043F\u043B\u044F\u0436\u0456 4",
      "category": "extra",
      "line": 35856,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u0430 \u043F\u043B\u044F\u0436\u0456 5",
      "category": "extra",
      "line": 35859,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u0430 \u043F\u043B\u044F\u0436\u0456 6",
      "category": "extra",
      "line": 35862,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u0430 \u043F\u043B\u044F\u0436\u0456 7",
      "category": "extra",
      "line": 35865,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430\u0433\u043E\u0440\u0430\u0442\u0438 \u043D\u0430 \u043F\u0440\u0430\u0432\u0443 \u043D\u043E\u0433\u0443",
      "category": "extra",
      "line": 35868,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430\u0433\u043E\u0440\u0430\u0442\u0438 \u043D\u0430 \u043B\u0456\u0432\u0443 \u043D\u043E\u0433\u0443",
      "category": "extra",
      "line": 35871,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0413\u043E\u043F\u043D\u0456\u043A",
      "category": "extra",
      "line": 35874,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u0437\u0456 \u0437\u0431\u0440\u043E\u0454\u044E",
      "category": "extra",
      "line": 35877,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u0437\u0430 \u0441\u0442\u043E\u0439\u043A\u043E\u044E",
      "category": "extra",
      "line": 35880,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u0430 \u0431\u0430\u0440\u043D\u043E\u043C\u0443 \u0441\u0442\u0443\u043B\u0456",
      "category": "extra",
      "line": 35883,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u0430 \u043A\u043E\u0440\u0442\u0430\u0445",
      "category": "extra",
      "line": 35886,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 3",
      "category": "extra",
      "line": 35889,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 4",
      "category": "extra",
      "line": 35892,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 5",
      "category": "extra",
      "line": 35895,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u0438\u0441\u0456\u0441\u0442\u0438",
      "category": "extra",
      "line": 35898,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0456\u043B\u044C\u043A\u0438 \u043D\u0435 \u0431\u0438\u0439\u0442\u0435",
      "category": "extra",
      "line": 35901,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u043E\u0441\u0438\u0442\u0438 \u043F\u043E\u0449\u0430\u0434\u0438",
      "category": "extra",
      "line": 35904,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u043E\u0437\u0432\u0430\u043B\u0438\u0442\u0438\u0441\u044F",
      "category": "extra",
      "line": 35907,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041B\u0435\u0436\u0430\u0442\u0438 \u043D\u0430 \u0448\u0435\u0437\u043B\u043E\u043D\u0433\u0443",
      "category": "extra",
      "line": 35910,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041B\u0435\u0436\u0430\u0442\u0438 \u0432 \u043B\u0456\u0436\u043A\u0443",
      "category": "extra",
      "line": 35913,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041B\u0435\u0436\u0430\u0442\u0438 \u043D\u0430 \u0448\u0435\u0437\u043B\u043E\u043D\u0433\u0443 2",
      "category": "extra",
      "line": 35916,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041B\u0435\u0436\u0430\u0442\u0438 \u043D\u0430 \u0448\u0435\u0437\u043B\u043E\u043D\u0433\u0443 3",
      "category": "extra",
      "line": 35919,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041B\u0435\u0436\u0430\u0442\u0438 \u043D\u0430 \u0448\u0435\u0437\u043B\u043E\u043D\u0433\u0443 4",
      "category": "extra",
      "line": 35922,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041B\u0435\u0436\u0430\u0442\u0438 \u043D\u0430 \u0448\u0435\u0437\u043B\u043E\u043D\u0433\u0443 5",
      "category": "extra",
      "line": 35925,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041B\u0435\u0436\u0430\u0442\u0438 \u043D\u0430 \u0448\u0435\u0437\u043B\u043E\u043D\u0433\u0443 6",
      "category": "extra",
      "line": 35928,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u0430 \u0437\u0435\u043C\u043B\u0456 2",
      "category": "extra",
      "line": 35931,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u043E\u044F\u0442\u0438 \u043D\u0430 \u043A\u043E\u043B\u0456\u043D\u0430\u0445",
      "category": "extra",
      "line": 35934,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u0438\u0441\u0456\u0441\u0442\u0438 2",
      "category": "extra",
      "line": 35937,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u0438\u0441\u0456\u0441\u0442\u0438 3",
      "category": "extra",
      "line": 35940,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u0437\u0430 \u0431\u0430\u0440\u043E\u043C",
      "category": "extra",
      "line": 35943,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0436\u0430\u043A\u0443\u0437\u0456",
      "category": "extra",
      "line": 35946,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0436\u0430\u043A\u0443\u0437\u0456 2",
      "category": "extra",
      "line": 35949,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0436\u0430\u043A\u0443\u0437\u0456 3",
      "category": "extra",
      "line": 35952,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0436\u0430\u043A\u0443\u0437\u0456 4",
      "category": "extra",
      "line": 35955,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u0437 \u0433\u043E\u043B\u043E\u0432\u043E\u044E \u043D\u0430 \u0440\u0443\u043A\u0430\u0445",
      "category": "extra",
      "line": 35958,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u0440\u043E\u0437\u0441\u043B\u0430\u0431\u043B\u0435\u043D\u043E",
      "category": "extra",
      "line": 35961,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043E\u0433\u043B\u044F\u0434\u0430\u044E\u0447\u0438\u0441\u044C",
      "category": "extra",
      "line": 35964,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u043E",
      "category": "extra",
      "line": 35967,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043D\u043E\u0433\u0430 \u043D\u0430 \u043D\u043E\u0433\u0443",
      "category": "extra",
      "line": 35970,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043F\u0435\u0440\u0435\u043C\u0438\u043A\u0430\u044E\u0447\u0438 \u0422\u0412",
      "category": "extra",
      "line": 35973,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u043F\u0435\u0440\u0435\u043C\u0438\u043A\u0430\u044E\u0447\u0438 \u0422\u0412 2",
      "category": "extra",
      "line": 35976,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043B\u0430\u043A\u0430\u0442\u0438 \u0441\u0438\u0434\u044F\u0447\u0456",
      "category": "extra",
      "line": 35979,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u0443 \u043A\u0440\u0435\u0441\u043B\u0456",
      "category": "extra",
      "line": 35982,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u0441\u0443\u043C\u043D\u043E",
      "category": "extra",
      "line": 35985,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u0440\u043E\u0437\u043C\u043E\u0432\u043B\u044F\u044E\u0447\u0438",
      "category": "extra",
      "line": 35988,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u0443 \u043A\u043B\u0443\u0431\u0456",
      "category": "extra",
      "line": 35991,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u0443 \u043A\u043B\u0443\u0431\u0456 2",
      "category": "extra",
      "line": 35994,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u0443 \u043A\u043B\u0443\u0431\u0456 3",
      "category": "extra",
      "line": 35997,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u0456\u043C \u0431\u0430\u043C \u0431\u0443\u043C",
      "category": "extra",
      "line": 36e3,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0425\u043E\u043B\u0430",
      "category": "extra",
      "line": 36003,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0430 \u0432\u0435\u0447\u0456\u0440\u0446\u0456",
      "category": "extra",
      "line": 36006,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0406\u043D\u0444\u0456\u043A\u043E\u0432\u0430\u043D\u0438\u0439",
      "category": "extra",
      "line": 36009,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0436\u0438\u0442\u0442\u0435\u0440\u0431\u0430\u0433",
      "category": "extra",
      "line": 36012,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0435\u0432\u0435\u0440 \u0413\u043E\u043D\u043D\u0430",
      "category": "extra",
      "line": 36015,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u0435\u0430\u043D\u0456\u043C\u043E\u0432\u0430\u043D\u0438\u0439",
      "category": "extra",
      "line": 36018,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0416\u0438\u0432\u0438\u0439",
      "category": "extra",
      "line": 36021,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0435 \u041C\u0435\u0442\u0442?",
      "category": "extra",
      "line": 36024,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0432\u043D\u0435 \u0432\u0456\u0434\u043F\u0440\u0430\u0446\u044E\u0432\u0430\u043D\u043D\u044F",
      "category": "extra",
      "line": 36027,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u043E\u0441\u0443\u043D\u0443\u0442\u0430 \u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430",
      "category": "extra",
      "line": 36030,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u043C\u0456\u043B\u0438\u0432\u0430 \u043F\u043E\u0437\u0438\u0446\u0456\u044F",
      "category": "extra",
      "line": 36033,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u043E\u043C\u0431\u0430\u0441\u0442\u0456\u043A",
      "category": "extra",
      "line": 36036,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C \u043A\u0440\u0430\u0431\u0430",
      "category": "extra",
      "line": 36039,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0446\u044E\u0432\u0430\u043B\u044C\u043D\u0430 \u0442\u0435\u0440\u0430\u043F\u0456\u044F",
      "category": "extra",
      "line": 36042,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0440\u0456\u044F",
      "category": "extra",
      "line": 36045,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0437\u0430\u0437\u0435\u043C\u043D\u0438\u0439",
      "category": "extra",
      "line": 36048,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0406\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u0438\u0439",
      "category": "extra",
      "line": 36051,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0430\u0439\u0431",
      "category": "extra",
      "line": 36054,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0429\u0435\u0434\u0440\u0438\u0439",
      "category": "extra",
      "line": 36057,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u0435\u0437 \u043A\u0456\u0441\u0442\u043E\u043A",
      "category": "extra",
      "line": 36060,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C \u041E\u0444\u0456\u0446\u0435\u0440\u0430",
      "category": "extra",
      "line": 36063,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u043E\u043D\u0433\u0430",
      "category": "extra",
      "line": 36066,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0428\u0430\u043B\u0435\u043D\u0456 \u043D\u0456\u0436\u043A\u0438",
      "category": "extra",
      "line": 36069,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0413\u043B\u0438\u0431\u0438\u043D\u0430 \u0442\u0430\u043D\u0446\u044E",
      "category": "extra",
      "line": 36072,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0440\u0456\u0439\u043B\u0438\u0432\u0456 \u043D\u0456\u0436\u043A\u0438",
      "category": "extra",
      "line": 36075,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0441\u0456 \u043B\u044E\u0431\u043B\u044F\u0442\u044C \u043C\u0435\u043D\u0435",
      "category": "extra",
      "line": 36078,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0424\u043B\u044E\u043A\u0441",
      "category": "extra",
      "line": 36081,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0456\u043B\u044C\u043D\u0438\u0439 \u0444\u043B\u043E\u0443",
      "category": "extra",
      "line": 36084,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0456\u043B\u044C\u043D\u0456 \u0440\u0443\u0445\u0438",
      "category": "extra",
      "line": 36087,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0426\u0443\u043A\u0440\u043E\u0432\u0438\u0439 \u0440\u0430\u0448",
      "category": "extra",
      "line": 36090,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0432\u0430\u0439\u043F",
      "category": "extra",
      "line": 36093,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0432\u0456\u0442\u0447\u0441\u0442\u0435\u043F",
      "category": "extra",
      "line": 36096,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0432\u0456\u0441\u0442",
      "category": "extra",
      "line": 36099,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u043E\u043A\u0440\u0443\u0442",
      "category": "extra",
      "line": 36102,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0438\u0445\u043E\u0440",
      "category": "extra",
      "line": 36105,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u0440\u0438\u0431\u0430\u0442\u0438 \u0437 \u043D\u0438\u043C",
      "category": "extra",
      "line": 36108,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0427\u0456\u043B\u043E\u0432\u0438\u0439",
      "category": "extra",
      "line": 36111,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0434\u0440\u0443\u0433\u0438",
      "category": "extra",
      "line": 36114,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0446\u044E\u044E\u0447\u0430 \u043C\u0430\u0432\u043F\u043E\u0447\u043A\u0430",
      "category": "extra",
      "line": 36117,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0456\u0434\u0432\u043E\u043B\u0456\u043A\u0430\u043D\u043D\u044F \u0443\u0432\u0430\u0433\u0438",
      "category": "extra",
      "line": 36120,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0434\u0432\u043E\u0457\u0442\u0438",
      "category": "extra",
      "line": 36123,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0442\u0438 \u0444\u043B\u043E\u0443",
      "category": "extra",
      "line": 36126,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0430\u0431\u0443\u0434\u044C \u043C\u0435\u043D\u0435",
      "category": "extra",
      "line": 36129,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0425\u0435\u0439 \u0437\u0430\u0440\u0430\u0437",
      "category": "extra",
      "line": 36132,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0438\u043D\u0430\u043C\u0456\u0442",
      "category": "extra",
      "line": 36135,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0432\u0456\u043B\u044C\u043D\u0438\u0439 \u0445\u0456\u043F-\u0445\u043E\u043F",
      "category": "extra",
      "line": 36138,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0430\u043B\u044C\u0441\u0430",
      "category": "extra",
      "line": 36141,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u0456\u0433 \u043D\u0430 \u043C\u0456\u0441\u0446\u0456",
      "category": "extra",
      "line": 36144,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041D\u0438\u0437\u044C\u043A\u0438\u0439 \u0442\u0430\u043D\u0435\u0446\u044C",
      "category": "extra",
      "line": 36147,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0425\u0456\u043F-\u0445\u043E\u043F \u0440\u0443\u043A\u0430\u043C\u0438",
      "category": "extra",
      "line": 36150,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0420\u0435\u043F \u0437\u0430\u043F\u0430\u043B",
      "category": "extra",
      "line": 36153,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 44",
      "category": "extra",
      "line": 36156,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 45",
      "category": "extra",
      "line": 36159,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u0438\u043B\u044C \u0437\u043C\u0456\u0457",
      "category": "extra",
      "line": 36162,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0430\u043D\u0435\u0446\u044C 46",
      "category": "extra",
      "line": 36165,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u0456\u043B\u043B\u0456 \u0414\u0436\u0438\u043D",
      "category": "extra",
      "line": 36168,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0430\u043A\u0430\u0440\u0435\u043D\u0430 2",
      "category": "extra",
      "line": 36171,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0432\u0456\u0441\u0442 2",
      "category": "extra",
      "line": 36174,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412 \u0431\u0456\u0442",
      "category": "extra",
      "line": 36177,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0438\u0441\u043A\u043E-\u0433\u0440\u0443\u0432",
      "category": "extra",
      "line": 36180,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0424\u0440\u0456\u043A-\u0448\u043E\u0443",
      "category": "extra",
      "line": 36183,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0413\u043E\u043D\u0447\u0438\u0439 \u043F\u0435\u0441",
      "category": "extra",
      "line": 36186,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "Ice Ice Baby",
      "category": "extra",
      "line": 36189,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u0440\u0438\u0431\u0443\u0447\u0438\u0439 \u0433\u0440\u0443\u0432",
      "category": "extra",
      "line": 36192,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041A\u043E\u0432\u0431\u043E\u0439\u0441\u044C\u043A\u0438\u0439 \u0442\u0430\u043D\u0435\u0446\u044C",
      "category": "extra",
      "line": 36195,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0430\u043A\u0441\u043E\u0444\u043E\u043D",
      "category": "extra",
      "line": 36198,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041C\u0435\u0433\u0430\u0444\u043E\u043D",
      "category": "extra",
      "line": 36201,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u043C\u0456\u0442\u0442\u0454\u0432\u0438\u0439 \u0431\u0430\u043A",
      "category": "extra",
      "line": 36204,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0438\u0434\u0456\u0442\u0438 \u0437 \u043A\u043D\u0438\u0433\u043E\u044E",
      "category": "extra",
      "line": 36207,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0435\u043B\u0444\u0456 Instagram",
      "category": "extra",
      "line": 36210,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0435\u043B\u0444\u0456 \u043F\u043E\u0437\u0443\u0432\u0430\u043D\u043D\u044F",
      "category": "extra",
      "line": 36213,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0435\u043B\u0444\u0456 \u0441\u0438\u0434\u044F\u0447\u0438",
      "category": "extra",
      "line": 36216,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0435\u043A\u0441\u0443\u0430\u043B\u044C\u043D\u0435 \u0441\u0435\u043B\u0444\u0456 2",
      "category": "extra",
      "line": 36219,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0435\u043A\u0441\u0443\u0430\u043B\u044C\u043D\u0435 \u0441\u0435\u043B\u0444\u0456",
      "category": "extra",
      "line": 36222,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0435\u043B\u0444\u0456 \u0437 \u0441\u0435\u0440\u0434\u0435\u0447\u043A\u043E\u043C",
      "category": "extra",
      "line": 36225,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041E\u0441\u0432\u0456\u0434\u0447\u0435\u043D\u043D\u044F",
      "category": "extra",
      "line": 36228,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0414\u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u0435 \u0441\u0435\u043B\u0444\u0456",
      "category": "extra",
      "line": 36231,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0413\u0440\u0430 \u043D\u0430 \u0433\u0456\u0442\u0430\u0440\u0456",
      "category": "extra",
      "line": 36234,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0427\u0438\u0442\u0430\u0442\u0438 \u043A\u043D\u0438\u0433\u0443",
      "category": "extra",
      "line": 36237,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0437\u0430 Drako",
      "category": "extra",
      "line": 36240,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0421\u0442\u0430\u043A\u0430\u043D \u0456 \u043F\u043B\u044F\u0448\u043A\u0430",
      "category": "extra",
      "line": 36243,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u0443\u0445\u0432\u0430\u043B\u0438\u0439 \u0434\u0438\u043C",
      "category": "extra",
      "line": 36246,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0410\u043B\u044C\u044F\u043D\u0441 OT9",
      "category": "extra",
      "line": 36249,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0437\u0430 \u0437 \u0434\u0438\u043C\u043E\u043C",
      "category": "extra",
      "line": 36252,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0413\u0440\u043E\u0448\u0456 DThang",
      "category": "extra",
      "line": 36255,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0417\u043D\u0430\u043A SMM",
      "category": "extra",
      "line": 36258,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0437\u0430 OYK",
      "category": "extra",
      "line": 36261,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0437\u0430 \u0437 \u0433\u0432\u0438\u043D\u0442\u0456\u0432\u043A\u043E\u044E",
      "category": "extra",
      "line": 36264,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0437\u0430 \u0437 \u0433\u0440\u043E\u0448\u0438\u043C\u0430",
      "category": "extra",
      "line": 36267,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0411\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B\u044C\u043D\u0438\u0439 \u043C'\u044F\u0447",
      "category": "extra",
      "line": 36270,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0456\u0441\u0442\u043E\u043B\u0435\u0442 \u0456 \u0432\u0456\u0441\u043A\u0456",
      "category": "extra",
      "line": 36273,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0412\u0443\u043B\u0438\u0447\u043D\u0438\u0439 \u043C\u0456\u043A\u0440\u043E\u0444\u043E\u043D",
      "category": "extra",
      "line": 36276,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0441\u0432\u0456\u0434\u0447\u0435\u043D\u043D\u044F",
      "category": "extra",
      "line": 36279,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041B\u0456\u0445\u0442\u0430\u0440\u0438\u043A",
      "category": "extra",
      "line": 36282,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0422\u0440\u0438\u043C\u0430\u0442\u0438 \u0433\u0432\u0438\u043D\u0442\u0456\u0432\u043A\u0443",
      "category": "extra",
      "line": 36285,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u0429\u0438\u0442",
      "category": "extra",
      "line": 36288,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u0440\u043E\u043C\u043E\u0432\u0430 \u0432 \u043C\u0456\u043A\u0440\u043E\u0444\u043E\u043D",
      "category": "extra",
      "line": 36291,
      "opensMenu": false
    },
    {
      "type": "animation",
      "label": "\u041F\u043E\u0437\u0430 \u0437\u0456 \u0437\u0431\u0440\u043E\u0454\u044E",
      "category": "extra",
      "line": 36294,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0412\u0438\u043A\u0438\u043D\u0443\u0442\u0438 \u0437 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0443",
      "category": "vehicle",
      "line": 36299,
      "opensMenu": true
    },
    {
      "type": "vehicle",
      "label": "\u041E\u0431\u0448\u0443\u043A\u0430\u0442\u0438",
      "category": "vehicle",
      "line": 36314,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0412\u0438\u0442\u044F\u0433\u0442\u0438 \u0437\u0430\u043A\u043E\u0432\u0430\u043D\u043E\u0433\u043E",
      "category": "vehicle",
      "line": 36317,
      "opensMenu": true
    },
    {
      "type": "vehicle",
      "label": "\u0415\u0432\u0430\u043A\u0443\u044E\u0432\u0430\u0442\u0438",
      "category": "vehicle",
      "line": 36327,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0412\u0438\u043F\u0438\u0441\u0430\u0442\u0438 \u0448\u0442\u0440\u0430\u0444",
      "category": "vehicle",
      "line": 36330,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u041F\u043E\u043B\u0430\u0433\u043E\u0434\u0438\u0442\u0438 \u0440\u0435\u043C\u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043E\u043C",
      "category": "vehicle",
      "line": 36333,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0414\u0432\u0435\u0440\u0456",
      "category": "vehicle",
      "line": 36336,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0417\u0430\u043C\u0456\u043D\u0438\u0442\u0438 \u043C\u0430\u0441\u0442\u0438\u043B\u043E",
      "category": "vehicle",
      "line": 36342,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0417\u0430\u043C\u0456\u043D\u0438\u0442\u0438 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440",
      "category": "vehicle",
      "line": 36345,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u041A\u0430\u043F\u043E\u0442",
      "category": "vehicle",
      "line": 36348,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A",
      "category": "vehicle",
      "line": 36351,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0411\u0430\u0433\u0430\u0436\u043D\u0438\u043A ",
      "category": "vehicle",
      "line": 36354,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0417\u0430\u043B\u0456\u0437\u0442\u0438 \u0432 \u0431\u0430\u0433\u0430\u0436\u043D\u0438\u043A",
      "category": "vehicle",
      "line": 36357,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u041F\u043E\u043A\u043B\u0430\u0441\u0442\u0438 \u044F\u0449\u0438\u043A",
      "category": "vehicle",
      "line": 36365,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0412\u0437\u044F\u0442\u0438 \u044F\u0449\u0438\u043A",
      "category": "vehicle",
      "line": 36368,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0417\u043B\u0430\u043C\u0430\u0442\u0438 \u0431\u0430\u0440\u0430\u043A",
      "category": "vehicle",
      "line": 36371,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0426\u0456\u043D\u0430 \u043F\u0440\u043E\u0457\u0437\u0434\u0443",
      "category": "vehicle",
      "line": 36374,
      "opensMenu": true
    },
    {
      "type": "vehicle",
      "label": "\u0426\u0456\u043D\u0430 \u0457\u0436\u0456",
      "category": "vehicle",
      "line": 36377,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u041F\u043E\u043B\u0430\u0433\u043E\u0434\u0438\u0442\u0438",
      "category": "vehicle",
      "line": 36380,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0417\u0430\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      "category": "vehicle",
      "line": 36383,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u041F\u0440\u043E\u0434\u0430\u0442\u0438 \u0440\u0435\u043C\u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442",
      "category": "vehicle",
      "line": 36386,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u041F\u0440\u043E\u0434\u0430\u0442\u0438 \u043A\u0430\u043D\u0456\u0441\u0442\u0440\u0443",
      "category": "vehicle",
      "line": 36389,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0417\u0430\u043C\u0456\u043D\u0430 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0443",
      "category": "vehicle",
      "line": 36392,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0417\u0430\u043C\u0456\u043D\u0430 \u043E\u043B\u0438\u0432\u0438",
      "category": "vehicle",
      "line": 36395,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u043D\u043E\u043C\u0435\u0440\u0438",
      "category": "vehicle",
      "line": 36398,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0417\u043D\u044F\u0442\u0438 \u043D\u043E\u043C\u0435\u0440\u0438",
      "category": "vehicle",
      "line": 36401,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0417\u043D\u044F\u0442\u0438 \u043E\u0431\u0432\u0456\u0441",
      "category": "vehicle",
      "line": 36404,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0428\u0442\u043E\u0432\u0445\u0430\u0442\u0438",
      "category": "vehicle",
      "line": 36407,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0412\u0438\u043A\u0438\u043D\u0443\u0442\u0438 \u0437 \u0431\u0430\u0433\u0430\u0436\u043D\u0438\u043A\u0443",
      "category": "vehicle",
      "line": 36410,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0417\u0430\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u043A\u0430\u043D\u0456\u0441\u0442\u0440\u043E\u044E",
      "category": "vehicle",
      "line": 36413,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0442\u0438 \u043F\u043E\u0432\u0435\u0440\u0431\u0430\u043D\u043A",
      "category": "vehicle",
      "line": 36416,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0406\u043D\u0444\u043E",
      "category": "vehicle",
      "line": 36419,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0431\u0440\u043E\u043D\u0435\u0436\u0438\u043B\u0435\u0442",
      "category": "vehicle",
      "line": 36422,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u041C\u0435\u0433\u0430\u0444\u043E\u043D: \u0417\u0443\u043F\u0438\u043D\u043A\u0430",
      "category": "vehicle",
      "line": 36425,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u041C\u0435\u0433\u0430\u0444\u043E\u043D: \u0414\u043E\u0440\u043E\u0433\u0443",
      "category": "vehicle",
      "line": 36428,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u041C\u0435\u0433\u0430\u0444\u043E\u043D: \u041A\u043E\u043B\u043E\u043D\u0430",
      "category": "vehicle",
      "line": 36431,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u041C\u0435\u0433\u0430\u0444\u043E\u043D: \u041A\u0438\u0434\u0430\u0439\u0442\u0435 \u0437\u0431\u0440\u043E\u044E",
      "category": "vehicle",
      "line": 36434,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u041C\u0435\u0433\u0430\u0444\u043E\u043D: \u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439",
      "category": "vehicle",
      "line": 36437,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u041F\u0435\u0440\u0435\u0434\u0430\u0442\u0438 \u0441\u0456\u043C\u2019\u0457",
      "category": "vehicle",
      "line": 36440,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0412\u0438\u043B\u0443\u0447\u0438\u0442\u0438 \u0437 \u0441\u0456\u043C\u2019\u0457",
      "category": "vehicle",
      "line": 36443,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0423\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438 \u0441\u0430\u0431\u0432\u0443\u0444\u0435\u0440",
      "category": "vehicle",
      "line": 36446,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0412\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u0441\u0430\u0431\u0432\u0443\u0444\u0435\u0440",
      "category": "vehicle",
      "line": 36449,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 \u0441\u0430\u0431\u0432\u0443\u0444\u0435\u0440",
      "category": "vehicle",
      "line": 36452,
      "opensMenu": false
    },
    {
      "type": "vehicle",
      "label": "\u0417\u043B\u0456\u0437\u0442\u0438",
      "category": "vehicle",
      "line": 36455,
      "opensMenu": false
    }
  ];

  var copy = (value) => JSON.parse(JSON.stringify(value));
  var serial = 0;
  var newId = () => `${Date.now().toString(36)}-${(++serial).toString(36)}`;
  var MacroError = class extends Error {
    constructor(code, message) {
      super(message);
      this.name = "MacroError";
      this.code = code;
    }
  };
  function fail(message) {
    throw new MacroError("invalid_data", message);
  }
  function text(value, max, label) {
    if (typeof value !== "string" || !value.trim() || value.length > max) fail(label);
    return value.trim();
  }
  function normalizeKeys(keys) {
    if (!Array.isArray(keys) || keys.length > 3 || keys.some((key) => !Number.isInteger(key) || key < 1 || key > 255)) fail("\u0411\u0456\u043D\u0434: \u0434\u043E \u0442\u0440\u044C\u043E\u0445 \u043A\u043E\u0434\u0456\u0432 \u043A\u043B\u0430\u0432\u0456\u0448 1\u2013255");
    return [...new Set(keys)].sort((a, b) => a - b);
  }
  function normalizeAction(action) {
    if (!action || typeof action !== "object") fail("\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0430 \u0434\u0456\u044F");
    const id = text(action.id || newId(), 80, "\u041D\u0435\u043C\u0430\u0454 ID \u0434\u0456\u0457");
    const p = action.params || {};
    if (["player", "vehicle", "animation"].includes(action.type)) {
      if (!actionCatalog.some((entry) => entry.type === action.type && entry.label === p.label)) fail("\u0414\u0456\u0457 \u043D\u0435\u043C\u0430\u0454 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0437\u0456 Quant");
      if (p.targetId !== void 0 && (!Number.isInteger(p.targetId) || p.targetId < 0)) fail("targetId: remoteId \u0441\u0443\u0442\u043D\u043E\u0441\u0442\u0456");
      return { id, type: action.type, params: { label: p.label, ...p.targetId === void 0 ? {} : { targetId: p.targetId } } };
    }
    if (action.type === "chatInput") return { id, type: "chatInput", params: { text: text(p.text, 256, "\u0422\u0435\u043A\u0441\u0442: 1\u2013256 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432") } };
    if (action.type === "delay") {
      if (!Number.isInteger(p.ms) || p.ms < 500 || p.ms > 2e4) fail("\u041F\u0430\u0443\u0437\u0430: 500\u201320000 \u043C\u0441");
      return { id, type: "delay", params: { ms: p.ms } };
    }
    if (action.type === "message") {
      const channel = p.channel === void 0 ? "near" : text(p.channel, 32, "\u041D\u0435\u043C\u0430\u0454 \u043A\u0430\u043D\u0430\u043B\u0443");
      return { id, type: "message", params: { text: text(p.text, 256, "\u0422\u0435\u043A\u0441\u0442: 1\u2013256 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432"), channel } };
    }
    if (action.type === "rp") {
      if (!["me", "do", "try"].includes(p.command)) fail("RP-\u043A\u043E\u043C\u0430\u043D\u0434\u0430: me, do \u0430\u0431\u043E try");
      return { id, type: "rp", params: { text: text(p.text, 256, "\u0422\u0435\u043A\u0441\u0442: 1\u2013256 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432"), command: p.command } };
    }
    fail("\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u0438\u0439 \u0442\u0438\u043F \u0434\u0456\u0457");
  }
  function normalizeMacro(macro) {
    if (!macro || !Array.isArray(macro.actions) || macro.actions.length > 32) fail("\u0414\u043E 32 \u0434\u0456\u0439 \u0443 \u043C\u0430\u043A\u0440\u043E\u0441\u0456");
    const actions = macro.actions.map(normalizeAction);
    if (new Set(actions.map((action) => action.id)).size !== actions.length) fail("\u041F\u043E\u0432\u0442\u043E\u0440\u044E\u0454\u0442\u044C\u0441\u044F ID \u0434\u0456\u0457");
    return {
      id: text(macro.id || newId(), 80, "\u041D\u0435\u043C\u0430\u0454 ID \u043C\u0430\u043A\u0440\u043E\u0441\u0443"),
      name: text(macro.name, 80, "\u041D\u0430\u0437\u0432\u0430: 1\u201380 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432"),
      enabled: macro.enabled !== false,
      keys: normalizeKeys(macro.keys || []),
      actions
    };
  }
  function normalizeProfile(profile) {
    if (!profile || !Array.isArray(profile.macros) || profile.macros.length > 32) fail("\u0414\u043E 32 \u043C\u0430\u043A\u0440\u043E\u0441\u0456\u0432 \u0443 \u043F\u0440\u043E\u0444\u0456\u043B\u0456");
    const macros = profile.macros.map(normalizeMacro);
    if (new Set(macros.map((macro) => macro.id)).size !== macros.length) fail("\u041F\u043E\u0432\u0442\u043E\u0440\u044E\u0454\u0442\u044C\u0441\u044F ID \u043C\u0430\u043A\u0440\u043E\u0441\u0443");
    const keys = macros.filter((macro) => macro.keys.length).map((macro) => macro.keys.join("+"));
    if (new Set(keys).size !== keys.length) fail("\u0414\u0432\u0430 \u043C\u0430\u043A\u0440\u043E\u0441\u0438 \u043D\u0435 \u043C\u043E\u0436\u0443\u0442\u044C \u043C\u0430\u0442\u0438 \u043E\u0434\u043D\u0430\u043A\u043E\u0432\u0438\u0439 \u0431\u0456\u043D\u0434");
    return {
      id: text(profile.id || newId(), 80, "\u041D\u0435\u043C\u0430\u0454 ID \u043F\u0440\u043E\u0444\u0456\u043B\u044E"),
      name: text(profile.name, 80, "\u041D\u0430\u0437\u0432\u0430: 1\u201380 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432"),
      macros
    };
  }
  var ProfileStore = class {
    constructor(data) {
      this.import(data || { version: 1, activeProfileId: "default", profiles: [
        { id: "default", name: "\u041E\u0441\u043D\u043E\u0432\u043D\u0438\u0439", macros: [] }
      ] });
    }
    import(data) {
      if (!data || data.version !== 1 || !Array.isArray(data.profiles) || !data.profiles.length || data.profiles.length > 10) fail("\u0424\u043E\u0440\u043C\u0430\u0442 v1: \u0432\u0456\u0434 1 \u0434\u043E 10 \u043F\u0440\u043E\u0444\u0456\u043B\u0456\u0432");
      const profiles = data.profiles.map(normalizeProfile);
      if (new Set(profiles.map((profile) => profile.id)).size !== profiles.length) fail("\u041F\u043E\u0432\u0442\u043E\u0440\u044E\u0454\u0442\u044C\u0441\u044F ID \u043F\u0440\u043E\u0444\u0456\u043B\u044E");
      if (!profiles.some((profile) => profile.id === data.activeProfileId)) fail("\u041D\u0435\u043C\u0430\u0454 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0456\u043B\u044E");
      this.data = { version: 1, activeProfileId: data.activeProfileId, profiles };
      return this.export();
    }
    export() {
      return copy(this.data);
    }
    active() {
      return copy(this.data.profiles.find((profile) => profile.id === this.data.activeProfileId));
    }
    _edit(change) {
      const draft = this.export();
      const result = change(draft);
      this.import(draft);
      return result;
    }
    createProfile(name) {
      const id = newId();
      return this._edit((draft) => {
        draft.profiles.push({ id, name, macros: [] });
        return id;
      });
    }
    setActive(id) {
      return this._edit((draft) => {
        if (!draft.profiles.some((p) => p.id === id)) fail("\u041D\u0435\u043C\u0430\u0454 \u043F\u0440\u043E\u0444\u0456\u043B\u044E");
        draft.activeProfileId = id;
      });
    }
    renameProfile(id, name) {
      return this._edit((draft) => {
        const p = draft.profiles.find((p2) => p2.id === id);
        if (!p) fail("\u041D\u0435\u043C\u0430\u0454 \u043F\u0440\u043E\u0444\u0456\u043B\u044E");
        p.name = name;
      });
    }
    deleteProfile(id) {
      return this._edit((draft) => {
        if (!draft.profiles.some((p) => p.id === id)) fail("\u041D\u0435\u043C\u0430\u0454 \u043F\u0440\u043E\u0444\u0456\u043B\u044E");
        if (draft.profiles.length === 1) fail("\u041D\u0435 \u043C\u043E\u0436\u043D\u0430 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u043F\u0440\u043E\u0444\u0456\u043B\u044C");
        draft.profiles = draft.profiles.filter((p) => p.id !== id);
        if (draft.activeProfileId === id) draft.activeProfileId = draft.profiles[0].id;
      });
    }
    upsertMacro(profileId, macro) {
      const normalized = normalizeMacro(macro);
      return this._edit((draft) => {
        const p = draft.profiles.find((p2) => p2.id === profileId);
        if (!p) fail("\u041D\u0435\u043C\u0430\u0454 \u043F\u0440\u043E\u0444\u0456\u043B\u044E");
        const i = p.macros.findIndex((m) => m.id === normalized.id);
        if (i < 0) p.macros.push(normalized);
        else p.macros[i] = normalized;
        return normalized.id;
      });
    }
    deleteMacro(profileId, macroId) {
      return this._edit((draft) => {
        const p = draft.profiles.find((p2) => p2.id === profileId);
        if (!p) fail("\u041D\u0435\u043C\u0430\u0454 \u043F\u0440\u043E\u0444\u0456\u043B\u044E");
        if (!p.macros.some((m) => m.id === macroId)) fail("\u041D\u0435\u043C\u0430\u0454 \u043C\u0430\u043A\u0440\u043E\u0441\u0443");
        p.macros = p.macros.filter((m) => m.id !== macroId);
      });
    }
  };
  var CancelToken = class {
    constructor() {
      this.cancelled = false;
      this.reason = "";
      this.listeners =                 new Set();
    }
    onCancel(listener) {
      if (this.cancelled) {
        listener();
        return () => {
        };
      }
      this.listeners.add(listener);
      return () => this.listeners.delete(listener);
    }
    cancel(reason) {
      if (this.cancelled) return;
      this.cancelled = true;
      this.reason = reason;
      for (const listener of [...this.listeners]) {
        try {
          listener();
        } catch (_) {
        }
      }
      this.listeners.clear();
    }
    check() {
      if (this.cancelled) throw new MacroError("cancelled", this.reason);
    }
  };
  function cancellableWait(ms, token) {
    return new Promise((resolve, reject) => {
      token.check();
      let off = () => {
      };
      const timer = setTimeout(() => {
        off();
        resolve();
      }, ms);
      off = token.onCancel(() => {
        clearTimeout(timer);
        off();
        reject(new MacroError("cancelled", token.reason));
      });
    });
  }
  function actionWithTimeout(adapter, action, context, token, ms) {
    return new Promise((resolve, reject) => {
      token.check();
      let done = false, off = () => {
      };
      function finish(error, result) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        off();
        error ? reject(error) : resolve(result);
      }
      const timer = setTimeout(() => {
        finish(new MacroError("action_timeout", "\u041D\u0435 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0443 \u0434\u0456\u0457"));
        token.cancel("action_timeout");
      }, ms);
      off = token.onCancel(() => finish(new MacroError("cancelled", token.reason)));
      Promise.resolve().then(() => {
        token.check();
        return adapter(copy(action), { ...context, token });
      }).then((result) => finish(null, result), (error) => finish(error));
    });
  }
  var MacroRunner = class {
    constructor({
      adapters = {},
      onStatus = () => {
      },
      canRun: canRun2 = () => true,
      wait = cancellableWait,
      now = Date.now,
      sendGapMs = 1e3,
      actionTimeoutMs = 1e4
    } = {}) {
      if (!Number.isFinite(sendGapMs) || sendGapMs < 250 || !Number.isFinite(actionTimeoutMs) || actionTimeoutMs < 100) fail("\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0456\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u0438 \u0432\u0438\u043A\u043E\u043D\u0430\u0432\u0446\u044F");
      Object.assign(this, { adapters, onStatus, canRun: canRun2, wait, now, sendGapMs, actionTimeoutMs });
      this.job = null;
      this.status = { state: "idle" };
    }
    _status(value) {
      this.status = copy(value);
      try {
        this.onStatus(copy(value));
      } catch (_) {
      }
    }
    cancel(reason = "\u0421\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0435\u043C") {
      if (!this.job) return false;
      this.job.token.cancel(reason);
      return true;
    }
    async run(macro, context = {}) {
      if (this.job) throw new MacroError("already_running", "\u0406\u043D\u0448\u0438\u0439 \u043C\u0430\u043A\u0440\u043E\u0441 \u0443\u0436\u0435 \u0432\u0438\u043A\u043E\u043D\u0443\u0454\u0442\u044C\u0441\u044F");
      const snapshot = normalizeMacro(macro);
      if (!snapshot.enabled) throw new MacroError("disabled", "\u041C\u0430\u043A\u0440\u043E\u0441 \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u043E");
      if (!snapshot.actions.length) throw new MacroError("empty", "\u041D\u0435\u043C\u0430\u0454 \u0434\u0456\u0439");
      const token = new CancelToken();
      const job = { token, macroId: snapshot.id };
      this.job = job;
      const info = { profileId: context.profileId || null, macroId: snapshot.id, total: snapshot.actions.length };
      let completed = 0, lastSend = null;
      try {
        for (let index = 0; index < snapshot.actions.length; index++) {
          token.check();
          if (!this.canRun()) throw new MacroError("blocked", "\u041A\u043B\u0456\u0454\u043D\u0442 \u0437\u0430\u0440\u0430\u0437 \u043D\u0435 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u0434\u0456\u044E");
          const action = snapshot.actions[index];
          this._status({ ...info, state: action.type === "delay" ? "waiting" : "running", index, completed });
          if (action.type === "delay") await this.wait(action.params.ms, token);
          else {
            const adapter = this.adapters[action.type];
            if (typeof adapter !== "function") throw new MacroError("no_adapter", "\u041D\u0435 \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u043E\u0431\u0440\u043E\u0431\u043D\u0438\u043A: " + action.type);
            if (lastSend !== null) {
              const rest = this.sendGapMs - (this.now() - lastSend);
              if (rest > 0) await this.wait(rest, token);
            }
            token.check();
            if (!this.canRun()) throw new MacroError("blocked", "\u041A\u043B\u0456\u0454\u043D\u0442 \u0437\u0430\u0440\u0430\u0437 \u043D\u0435 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u0434\u0456\u044E");
            const result = await actionWithTimeout(
              adapter,
              action,
              { ...context, actionId: action.id, index },
              token,
              this.actionTimeoutMs
            );
            if (!(result === true || result && result.success === true))
              throw new MacroError("action_rejected", result && result.message || "\u0414\u0456\u044E \u043D\u0435 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043E");
            lastSend = this.now();
          }
          token.check();
          completed++;
        }
        this._status({ ...info, state: "completed", completed });
        return { success: true, completed };
      } catch (error) {
        const cancelled = error.code === "cancelled";
        this._status({
          ...info,
          state: cancelled ? "cancelled" : "failed",
          completed,
          code: error.code || "adapter_error",
          message: error.message
        });
        return { success: false, cancelled, completed, code: error.code || "adapter_error", message: error.message };
      } finally {
        if (this.job === job) this.job = null;
      }
    }
  };

  var MacroBindings = class {
    constructor(keys, getMacros, onRun, canRun2 = () => true, onError = () => {
    }) {
      Object.assign(this, { keys, getMacros, onRun, canRun: canRun2, onError });
      this.registrations = [];
      this.pressed =                 new Set();
    }
    clear() {
      for (const [key, down, handler] of this.registrations) this.keys.unbind(key, down, handler);
      this.registrations = [];
      this.pressed.clear();
    }
    refresh() {
      this.clear();
      const all = new Set(this.getMacros().filter((m) => m.enabled).flatMap((m) => m.keys));
      for (const key of all) {
        const down = () => {
          if (this.pressed.has(key)) return;
          this.pressed.add(key);
          if (!this.canRun()) return;
          const candidates = this.getMacros().filter((m) => m.enabled && m.keys.length && m.keys.includes(key) && m.keys.every((k) => this.pressed.has(k))).sort((a, b) => b.keys.length - a.keys.length);
          if (candidates[0]) Promise.resolve().then(() => this.onRun(candidates[0].id)).catch(this.onError);
        };
        const up = () => {
          this.pressed.delete(key);
        };
        this.keys.bind(key, true, down);
        this.keys.bind(key, false, up);
        this.registrations.push([key, true, down], [key, false, up]);
      }
    }
  };

  function createQuantAdapter(mp2) {
    let browser = null;
    const tags = ["\u0411\u043B\u0438\u0436\u043D\u0456\u0439", "\u041A\u0440\u0438\u043A\u043D\u0443\u0442\u0438", "\u0420\u0430\u0446\u0456\u044F", "\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442", "\u0425\u0435\u043B\u043F\u0435\u0440. \u0447\u0430\u0442", "\u0410\u0434\u043C\u0456\u043D. \u0447\u0430\u0442", "\u0424\u0440\u0430\u043A\u0446\u0456\u0439\u043D\u0438\u0439", "\u0421\u0456\u043C\u2019\u044F", "\u0413\u0440\u0443\u043F\u0430", "DO", "ME"];
    function nearest(pool, targetId, radius) {
      const local = mp2.players.local;
      const origin = local.position;
      let candidate = null, best = radius;
      pool.forEach((entity) => {
        if (entity === local || targetId !== void 0 && entity.remoteId !== targetId || entity.dimension !== local.dimension) return;
        const p = entity.position;
        const distance = Math.hypot(p.x - origin.x, p.y - origin.y, p.z - origin.z);
        if (distance < best) {
          best = distance;
          candidate = entity;
        }
      });
      if (!candidate) throw new MacroError("no_target", "\u041F\u043E\u0440\u0443\u0447 \u043D\u0435\u043C\u0430\u0454 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E\u0457 \u0441\u0443\u0442\u043D\u043E\u0441\u0442\u0456");
      return candidate;
    }
    function interaction(action, context) {
      context.token.check();
      const entry = actionCatalog.find((item) => item.type === action.type && item.label === action.params.label);
      if (!entry) throw new MacroError("unknown_action", "\u041D\u0435\u043C\u0430\u0454 \u0434\u0456\u0457 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0437\u0456");
      if (mp2.interactionEntity) throw new MacroError("menu_active", "\u0421\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u0437\u0430\u043A\u0440\u0438\u0439\u0442\u0435 \u043C\u0435\u043D\u044E \u0432\u0437\u0430\u0454\u043C\u043E\u0434\u0456\u0457");
      if (action.type === "animation") mp2.events.call("interactionMenu.onClickAnimation", entry.label);
      else {
        const entity = nearest(
          action.type === "player" ? mp2.players : mp2.vehicles,
          action.params.targetId,
          action.type === "player" ? 2 : 5
        );
        mp2.interactionEntity = entity;
        try {
          if (action.type === "player") mp2.events.call("interactionMenu.onClickPlayerItem", entry.label, true);
          else mp2.events.call("interactionMenu.onClickVehicleItem", entry.label);
        } finally {
          mp2.interactionEntity = null;
        }
      }
      mp2.events.call("quantMacros:dispatched", JSON.stringify({ actionId: action.id, type: action.type }));
      if (entry.opensMenu) return { success: false, message: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u043E \u0448\u0442\u0430\u0442\u043D\u0443 \u0444\u043E\u0440\u043C\u0443: \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0442\u0435 \u0432\u0440\u0443\u0447\u043D\u0443" };
      return { success: true, dispatched: true };
    }
    function chat(action, context) {
      context.token.check();
      if (action.type === "chatInput") {
        mp2.events.call("chat.openWithInput", action.params.text);
        return { success: true, dispatched: true };
      }
      if (!browser || typeof browser.execute !== "function") throw new MacroError("no_browser", "\u041F\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u0448\u0442\u0430\u0442\u043D\u0438\u0439 browserMenu \u0447\u0435\u0440\u0435\u0437 attachBrowser");
      const text2 = action.type === "rp" ? "/" + action.params.command + " " + action.params.text : action.params.text;
      const tag = text2.startsWith("/") ? "command" : action.params.channel === "near" ? "\u0411\u043B\u0438\u0436\u043D\u0456\u0439" : action.params.channel;
      if (tag !== "command" && !tags.includes(tag)) throw new MacroError("unknown_channel", "\u041D\u0435\u043C\u0430\u0454 \u0442\u0430\u043A\u043E\u0433\u043E \u043A\u0430\u043D\u0430\u043B\u0443 \u0432 \u0434\u0430\u043C\u043F\u0456 Quant");
      const s = mp2.clientStorage || {};
      if (tag === "\u0420\u0430\u0446\u0456\u044F" && ![1, 2, 3, 4, 5, 15, 17].includes(s.faction) || tag === "\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442" && ![1, 2, 3, 4, 17].includes(s.faction) || tag === "\u0424\u0440\u0430\u043A\u0446\u0456\u0439\u043D\u0438\u0439" && ![6, 7, 8, 9, 10, 11, 12, 13, 14, 16].includes(s.faction) || tag === "\u0425\u0435\u043B\u043F\u0435\u0440. \u0447\u0430\u0442" && !s.helper || tag === "\u0410\u0434\u043C\u0456\u043D. \u0447\u0430\u0442" && !(s.admin >= 1) || tag === "\u0421\u0456\u043C\u2019\u044F" && !s.family || tag === "\u0413\u0440\u0443\u043F\u0430" && !s.group) throw new MacroError("channel_denied", "\u041A\u0430\u043D\u0430\u043B \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0443");
      const payload = { text: text2.trim().replace(/[&"'\\]/g, ""), tag };
      browser.execute('mp.invoke("chatMessage", ' + JSON.stringify(JSON.stringify(payload)) + ");");
      mp2.events.call("quantMacros:dispatched", JSON.stringify({ actionId: action.id, type: action.type }));
      return { success: true, dispatched: true };
    }
    return { interaction, chat, attachBrowser(value) {
      if (!value || typeof value.execute !== "function") throw new TypeError("\u041F\u043E\u0442\u0440\u0456\u0431\u0435\u043D \u043D\u0430\u044F\u0432\u043D\u0438\u0439 CEF browserMenu");
      browser = value;
    } };
  }

  var categoryDefinitions = [
    { id: "messages", label: "\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F" },
    { id: "rp", label: "\u0412\u0456\u0434\u0456\u0433\u0440\u0430\u0432\u0430\u043D\u043D\u044F" },
    { id: "show", label: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438" },
    { id: "vehicle", label: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442" },
    { id: "gov", label: "\u0414\u0435\u0440\u0436\u0430\u0432\u043D\u0435" },
    { id: "crime", label: "\u041A\u0440\u0438\u043C\u0456\u043D\u0430\u043B\u044C\u043D\u0435" },
    { id: "extra", label: "\u0406\u043D\u0448\u0435" },
    { id: "delay", label: "\u0417\u0430\u0442\u0440\u0438\u043C\u043A\u0430" }
  ];
  var documents =                 new Set([
    "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438",
    "\u041F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438",
    "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043F\u043E\u0441\u0432\u0456\u0434\u0447\u0435\u043D\u043D\u044F",
    "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438"
  ]);
  var government =                 new Set([
    "\u0422\u044F\u0433\u0442\u0438 \u043D\u0430 \u0441\u043E\u0431\u0456",
    "\u0412\u0438\u0434\u0430\u0442\u0438 \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u0438\u0439 \u043A\u0432\u0438\u0442\u043E\u043A",
    "\u0412\u0438\u043B\u0443\u0447\u0438\u0442\u0438 \u0437\u0431\u0440\u043E\u044E",
    "\u0417\u0456\u0440\u0432\u0430\u0442\u0438 \u043C\u0430\u0441\u043A\u0443",
    "\u041F\u0456\u0434\u0432\u0438\u0449\u0438\u0442\u0438 \u0443 \u0440\u0430\u043D\u0437\u0456",
    "\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438 \u0432 \u0440\u0430\u043D\u0437\u0456",
    "\u0412\u0438\u0433\u043D\u0430\u0442\u0438 \u0456\u0437 \u0444\u0440\u0430\u043A\u0446\u0456\u0457",
    "\u0417\u0430\u043A\u043B\u044E\u0447\u0438\u0442\u0438 \u0441\u043E\u044E\u0437",
    "\u0420\u043E\u0437\u0442\u043E\u0440\u0433\u043D\u0443\u0442\u0438 \u0441\u043E\u044E\u0437",
    "\u0412\u0434\u044F\u0433\u0442\u0438 \u043A\u0430\u0439\u0434\u0430\u043D\u043A\u0438",
    "\u0417\u043D\u044F\u0442\u0438 \u043A\u0430\u0439\u0434\u0430\u043D\u043A\u0438",
    "\u0424\u0440\u0430\u043A\u0446\u0456\u044F",
    "\u041E\u0431\u0448\u0443\u043A\u0430\u0442\u0438",
    "\u041A\u043E\u043D\u0444\u0456\u0441\u043A\u0430\u0446\u0456\u044F \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u0439",
    "\u0412\u0438\u0434\u0430\u0442\u0438 \u043C\u0435\u0434.\u043A\u0430\u0440\u0442\u0443",
    "\u0412\u0438\u0434\u0430\u0442\u0438 \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u044E \u043D\u0430 \u0437\u0431\u0440\u043E\u044E",
    "\u0412\u0438\u0434\u0430\u0442\u0438 \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u044E \u043D\u0430 \u043F\u043E\u043B\u044E\u0432\u0430\u043D\u043D\u044F",
    "\u0412\u0438\u0434\u0430\u0442\u0438 \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u044E \u043D\u0430 \u0440\u0438\u0431\u0430\u043B\u043A\u0443",
    "\u0412\u0438\u043B\u0443\u0447\u0438\u0442\u0438 \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u0435",
    "\u0412\u0438\u0434\u0430\u0442\u0438 \u0440\u043E\u0437\u0448\u0443\u043A",
    "\u0422\u044F\u0433\u043D\u0443\u0442\u0438 \u0437\u0430 \u0441\u043E\u0431\u043E\u044E",
    "\u0417\u0432\u0456\u043B\u044C\u043D\u0438\u0442\u0438",
    "\u0417\u0430\u043F\u0445\u0430\u0442\u0438 \u0432 \u0430\u0432\u0442\u043E",
    "\u0412\u0438\u043F\u0438\u0441\u0430\u0442\u0438 \u0448\u0442\u0440\u0430\u0444",
    "\u0412\u0438\u043B\u0443\u0447\u0438\u0442\u0438 \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u0438\u0439 \u043A\u0432\u0438\u0442\u043E\u043A",
    "\u0410\u0440\u0435\u0448\u0442\u0443\u0432\u0430\u0442\u0438",
    "\u041F\u0440\u043E\u0434\u0430\u0442\u0438 \u043F\u0456\u0433\u0443\u043B\u043A\u0438",
    "\u041F\u0440\u043E\u0434\u0430\u0442\u0438 \u0430\u043F\u0442\u0435\u0447\u043A\u0443",
    "\u041F\u0440\u043E\u0434\u0430\u0442\u0438 \u0432\u0456\u0442\u0430\u043C\u0456\u043D\u0438",
    "\u041F\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u044F",
    "\u0420\u0435\u0430\u043D\u0456\u043C\u0443\u0432\u0430\u0442\u0438",
    "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u0434\u043E \u0444\u0440\u0430\u043A\u0446\u0456\u0457"
  ]);
  var crime =                 new Set([
    "\u0417\u0456\u0431\u0440\u0430\u0442\u0438 \u0437\u0431\u0440\u043E\u044E",
    "\u041F\u043E\u0433\u0440\u0430\u0431\u0443\u0432\u0430\u0442\u0438",
    "\u041F\u043E\u0431\u0440\u0438\u0442\u0438",
    "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0442\u0438 \u0432\u0456\u0434\u043C\u0438\u0447\u043A\u0443",
    "\u0417\u0432\u2019\u044F\u0437\u0430\u0442\u0438 \u0441\u0442\u044F\u0436\u043A\u043E\u044E",
    "\u0417\u0432i\u043B\u044C\u043D\u0438\u0442\u0438 \u0437 \u0432\u2019\u044F\u0437\u043D\u0438\u0446i",
    "\u041E\u0434\u044F\u0433\u043D\u0443\u0442\u0438 \u043C\u0456\u0448\u043E\u043A",
    "\u0417\u043D\u044F\u0442\u0438 \u043C\u0456\u0448\u043E\u043A",
    "\u041F\u0440\u0438\u0432\u2019\u044F\u0437\u0430\u0442\u0438",
    "\u0412\u0456\u0434\u0432\u2019\u044F\u0437\u0430\u0442\u0438",
    "\u0417\u0430\u043F\u0445\u0430\u0442\u0438 \u0432 \u0431\u0430\u0433\u0430\u0436\u043D\u0438\u043A"
  ]);
  function categoryFor(entry) {
    if (entry.type === "vehicle") return "vehicle";
    if (documents.has(entry.label)) return "show";
    if (government.has(entry.label)) return "gov";
    if (crime.has(entry.label)) return "crime";
    return "extra";
  }
  var channels = [
    "\u0411\u043B\u0438\u0436\u043D\u0456\u0439",
    "\u041A\u0440\u0438\u043A\u043D\u0443\u0442\u0438",
    "\u0420\u0430\u0446\u0456\u044F",
    "\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442",
    "\u0425\u0435\u043B\u043F\u0435\u0440. \u0447\u0430\u0442",
    "\u0410\u0434\u043C\u0456\u043D. \u0447\u0430\u0442",
    "\u0424\u0440\u0430\u043A\u0446\u0456\u0439\u043D\u0438\u0439",
    "\u0421\u0456\u043C\u2019\u044F",
    "\u0413\u0440\u0443\u043F\u0430",
    "DO",
    "ME"
  ];
  function groupActions(catalog) {
    const actions = catalog.map((entry) => ({
      ...entry,
      category: categoryFor(entry),
      template: { type: entry.type, params: { label: entry.label } }
    }));
    channels.forEach((channel) => actions.push({
      category: "messages",
      type: "message",
      label: channel,
      template: { type: "message", params: { text: "", channel: channel === "\u0411\u043B\u0438\u0436\u043D\u0456\u0439" ? "near" : channel } }
    }));
    ["me", "do", "try"].forEach((command) => actions.push({
      category: "rp",
      type: "rp",
      label: "/" + command,
      template: { type: "rp", params: { command, text: "" } }
    }));
    actions.push({
      category: "extra",
      type: "chatInput",
      label: "\u0417\u0430\u043F\u043E\u0432\u043D\u0438\u0442\u0438 \u043F\u043E\u043B\u0435 \u0447\u0430\u0442\u0443",
      template: { type: "chatInput", params: { text: "" } }
    });
    actions.push({
      category: "delay",
      type: "delay",
      label: "\u041F\u0430\u0443\u0437\u0430",
      template: { type: "delay", params: { ms: 1e3 } },
      minMs: 500,
      maxMs: 2e4
    });
    return categoryDefinitions.map((category) => ({
      ...category,
      actions: actions.filter((action) => action.category === category.id)
    }));
  }

  var root = typeof globalThis !== "undefined" ? globalThis : global;
  if (root.QuantMacrosExample) root.QuantMacrosExample.unload();
  var storageKey = "quantMacrosExampleV1";
  var alive = true;
  var chatAdapter = null;
  var mode = "preview";
  var quant = createQuantAdapter(mp);
  function notify(error) {
    if (mp.console && mp.console.logError) mp.console.logError("[Macros] " + error.message);
  }
  var store;
  try {
    store = new ProfileStore(mp.storage && mp.storage.data && mp.storage.data[storageKey]);
  } catch (error) {
    notify(error);
    store = new ProfileStore();
  }
  function canRun() {
    if (!alive) return false;
    if (typeof mp.bindBlocker === "function") return !mp.bindBlocker();
    return !(mp.gui && mp.gui.cursor && mp.gui.cursor.visible);
  }
  async function send(action, context) {
    if (mode === "preview") {
      mp.events.call("quantMacros:preview", JSON.stringify({ action, profileId: context.profileId }));
      return { success: true, preview: true };
    }
    if (["player", "vehicle", "animation"].includes(action.type)) return quant.interaction(action, context);
    return chatAdapter ? chatAdapter(action, context) : quant.chat(action, context);
  }
  var runner = new MacroRunner({
    adapters: { message: send, rp: send, chatInput: send, player: send, vehicle: send, animation: send },
    canRun,
    onStatus: (status) => mp.events.call("quantMacros:status", JSON.stringify(status))
  });
  var bindings = new MacroBindings(
    mp.keys,
    () => store.active().macros,
    (macroId) => api.run(macroId),
    canRun,
    notify
  );
  function changed() {
    runner.cancel("\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u043C\u0456\u043D\u0435\u043D\u043E");
    if (mp.storage && mp.storage.data && typeof mp.storage.flush === "function") {
      mp.storage.data[storageKey] = store.export();
      mp.storage.flush();
    }
    bindings.refresh();
    mp.events.call("quantMacros:profiles", JSON.stringify(store.export()));
  }
  function requireAlive() {
    if (!alive) throw new MacroError("unloaded", "\u041C\u043E\u0434\u0443\u043B\u044C \u0432\u0438\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E");
  }
  function edit(fn) {
    requireAlive();
    const value = fn();
    changed();
    return value;
  }
  var api = {
    getActionCatalog() {
      return JSON.parse(JSON.stringify(actionCatalog));
    },
    getActionCategories() {
      return JSON.parse(JSON.stringify(groupActions(actionCatalog)));
    },
    attachBrowser(browser) {
      requireAlive();
      runner.cancel("\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u0437\u043C\u0456\u043D\u0435\u043D\u043E");
      quant.attachBrowser(browser);
    },
    exportProfiles() {
      return store.export();
    },
    importProfiles(data) {
      return edit(() => store.import(data));
    },
    createProfile(name) {
      return edit(() => store.createProfile(name));
    },
    renameProfile(id, name) {
      return edit(() => store.renameProfile(id, name));
    },
    deleteProfile(id) {
      return edit(() => store.deleteProfile(id));
    },
    setActiveProfile(id) {
      return edit(() => store.setActive(id));
    },
    upsertMacro(profileId, macro) {
      return edit(() => store.upsertMacro(profileId, macro));
    },
    deleteMacro(profileId, macroId) {
      return edit(() => store.deleteMacro(profileId, macroId));
    },
    async run(macroId) {
      requireAlive();
      const profile = store.active();
      const macro = profile.macros.find((m) => m.id === macroId);
      if (!macro) throw new MacroError("not_found", "\u041D\u0435\u043C\u0430\u0454 \u043C\u0430\u043A\u0440\u043E\u0441\u0443 \u0432 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u043C\u0443 \u043F\u0440\u043E\u0444\u0456\u043B\u0456");
      return runner.run(macro, { profileId: profile.id });
    },
    cancel() {
      return runner.cancel();
    },
    getStatus() {
      return { ...runner.status, mode };
    },
    registerChatAdapter(adapter) {
      requireAlive();
      if (typeof adapter !== "function") throw new TypeError("\u041F\u043E\u0442\u0440\u0456\u0431\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0456\u044F");
      runner.cancel("\u0410\u0434\u0430\u043F\u0442\u0435\u0440 \u0437\u043C\u0456\u043D\u0435\u043D\u043E");
      chatAdapter = adapter;
    },
    setMode(value) {
      requireAlive();
      if (!["preview", "live"].includes(value)) throw new TypeError("\u0420\u0435\u0436\u0438\u043C: preview \u0430\u0431\u043E live");
      runner.cancel("\u0420\u0435\u0436\u0438\u043C \u0437\u043C\u0456\u043D\u0435\u043D\u043E");
      mode = value;
    },
    unload() {
      if (!alive) return;
      alive = false;
      runner.cancel("\u041C\u043E\u0434\u0443\u043B\u044C \u0432\u0438\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E");
      bindings.clear();
      mp.events.remove("quantMacros:run", runHandler);
      mp.events.remove("quantMacros:cancel", cancelHandler);
      mp.events.remove("quantMacros:unload", unloadHandler);
      if (root.QuantMacrosExample === api) delete root.QuantMacrosExample;
    }
  };
  function runHandler(id) {
    api.run(id).catch(notify);
  }
  function cancelHandler() {
    api.cancel();
  }
  function unloadHandler() {
    api.unload();
  }
  root.QuantMacrosExample = api;
  mp.events.add("quantMacros:run", runHandler);
  mp.events.add("quantMacros:cancel", cancelHandler);
  mp.events.add("quantMacros:unload", unloadHandler);
  bindings.refresh();
})();
