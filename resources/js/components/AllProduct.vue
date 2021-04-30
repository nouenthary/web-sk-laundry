<template>
    <div>
        <md-field>
            <label>Filter</label>
            <md-input v-model="initial" onkeypress="console.log(this.value)"></md-input>
        </md-field>

        <h2 class="text-center">Products List</h2>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [],
                initial: ""
            }
        },
        created() {
            this.axios
                .get('api/products/')
                .then(response => {
                    this.products = response.data;
                });
        },
        methods: {
            deleteProduct(id) {
                this.axios
                    .delete(`http://localhost:8000/api/products/${id}`)
                    .then(response => {
                        let i = this.products.map(data => data.id).indexOf(id);
                        this.products.splice(i, 1)
                    });
            }
        }
    }
</script>
