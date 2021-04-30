<template>
    <div>
         <a-table size="small" bordered :style='{background: "#fff"}' :loading='loading' :row-selection="rowSelection" :columns="columns" :data-source="data" rowKey="id" >           
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
      title='Create a new collection'
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
    dataIndex: "name",
    key: "name",
    title: "Customer",  
  },
   {
    dataIndex: "phone",
    key: "phone",
    title: "phone",  
  },
   {
    dataIndex: "address",
    key: "address",
    title: "Address",  
  },
];

import http from "../utils/http-common";

export default {
  components: { CollectionCreateForm },
  name: "Customer",
  data: () => ({
    service_name: "",
    data: [],
    columns,
    loading: false,
    visible: false
  }),
  created() {
    this.gets();
  },
  methods: {
    gets() {
      http
        .post("/customers", { service_name: this.service_name })
        .then(response => {
          console.log(response.data);
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
    }
  },
  computed: {
    rowSelection() {
      return {          
      };
    }
  }
};
</script>