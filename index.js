const axios = require('axios');
let data = JSON.stringify({
  "custom_collection": {
    "title": "Sample",
    "body_html": "Description",
    "sort_order": "best-selling",
    "collection_type": "custom",
    "image": {
      "src": "https://cdn.shopify.com/s/files/1/0735/6376/7090/collections/noon.jpg?v=1679019703"
    }
  }
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://59a73a51ee926be098d6812f794be585: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@pesito-replica.myshopify.com/admin/api/2023-01/custom_collections.json',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
