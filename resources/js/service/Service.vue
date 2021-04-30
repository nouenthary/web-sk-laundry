<template>
    <div>
    <a-button type="primary"  @click="showModal">            
        Add New
    </a-button>

    <collection-create-form
      ref="collectionForm"
      :visible="visible"
      @cancel="handleCancel"
      @create="handleCreate"
    />

        <a-table 
        size='small'
         bordered 
         :style='{background: "#fff"}' 
         :loading='loading' 
         :row-selection="rowSelection" 
         :columns="columns" :data-source="data" rowKey="id" >           
             <span slot="tags" slot-scope="tags">
                <a-tag              
                    :key="tags"
                    :color="tags === 'Enable' ? 'green': 'volcano'"
                >
                    {{ tags }}
                </a-tag>
            </span>


            <span slot-scope="text, record" slot="action">
                <a-dropdown>
                <a-menu  slot="overlay">
                    <a-menu-item key="1" onclick='console.log(record)'>
                        Edit
                    </a-menu-item>                                    
                </a-menu>
                <a-button size='small'><a-icon type="ellipsis" /> </a-button>
                </a-dropdown>
            </span>
       
        </a-table>                        
  
    </div>
</template>

<script>
const CollectionCreateForm = {
  props: ["visible"],
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "form_in_modal" });
  },
  template: `
    <a-modal
      :visible="visible"
      title='Create a Service'
      okText='Create'
      @cancel="() => { $emit('cancel') }"
      @ok="() => { $emit('create') }"
    >
      <a-form layout='vertical' :form="form">
        <a-form-item label='Service'>
          <a-input
            v-decorator="[
              'service_name',
              {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              }
            ]"
          />
        </a-form-item>

        <a-select
          show-search
          placeholder="Select a Service"
          option-filter-prop="children"
          style="width: 200px"
         
        >          
          <a-select-option value="service" v-for="item in service_type" :key="item" :value="item">
            {{item}}
          </a-select-option>          
        </a-select> 


        <a-form-item label='Enable'>
          <a-input            
            v-decorator="['status']"
          />
        </a-form-item>      
      </a-form>
    </a-modal>
  `
};

const columns = [
  {
    dataIndex: "service_name",
    key: "service_name",
    title: "service name",
    slots: {
      customRender: "service_name"
    }
  },
  {
    title: "Unit Type",
    key: "unit_type",
    dataIndex: "unit_type"
  },
  {
    title: "Unit",
    key: "unit",
    dataIndex: "unit"
  },
   {
    title: "Price",
    key: "price",
    dataIndex: "price"
  },
  {
    title: "Discount",
    key: "discount",
    dataIndex: "discount"
  },
  {
    title: "Start Date",
    key: "start_date",
    dataIndex: "start_date"
  },
  {
    title: "End Date",
    key: "end_date",
    dataIndex: "end_date"
  },
  {
    title: "Type",
    key: "type",
    dataIndex: "type"
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    scopedSlots: { customRender: "tags" }
  }

  //   {
  //     title: "Action",
  //     key: "action",
  //     scopedSlots: {
  //       customRender: "action"
  //     }
  //   }
];
const data = [];
import http from "../utils/http-common";

export default {
  components: { CollectionCreateForm },
  name: "Service",
  data: () => ({
    service_name: "",
    data: [],
    columns,
    loading: false,
    visible: false,
    service_type: []
  }),
  created() {
    this.gets();
    http.get("/service-type").then(response => {
      this.service_type = response.data;
    });
  },
  methods: {
    searching() {
      this.gets();
    },
    gets() {
      http
        .post("/service", { service_name: this.service_name })
        .then(response => {
          this.data = response.data;
        });
    },
    showModal() {
      this.visible = true;
    },
    handleCancel() {
      this.visible = false;
    },
    handleCreate() {
      const form = this.$refs.collectionForm.form;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }

        this.axios.post("/api/service/create", { ...values }).then(response => {
          console.log(response);
          this.gets();
        });

        form.resetFields();
        this.visible = false;
      });
    },

    handleChange(value) {
      console.log(`${value}`);
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    }
  },
  computed: {
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        }       
      };
    }
  }
};
</script>

<style>

</style>
