export default {
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mysql: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'coderhouse'
        }
    },
    mongodb: {
        url: 'mongodb://localhost:27017/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "ch-ecommerce-e7029",
        "private_key_id": "ed3cc0e2537c73d5b3fe8e8bf6343055e2348c6b",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC3AmJSs0k6tUfO\nRGOrOLcXA25TZPfhxWIKnhML+zbsJdCsIcyDc9vgpWRyMhp//SAtTa1Mjwids3O3\nlM2NVNVT6LykUSxXboCgAEZJKk+ds65M01NXbvZmgguubkn2hSv3/GdR6AKmNpcs\nbuwAIcIie+QLJAVwFFZAnK7hHEct0/tHe5zHUbVcZgY7oFQVvk+A2P5SFiVB5oB2\nkTy+/Lz8BiVX3kdgmTx/yXgf/epx0IZMUIHa/4lH1APGmYdv4qpsmJCCKdpNBb3V\nG83QY3DQuUxiklMSi3Wydy1F2bnlDfhpvR8fT/jwoZ0L0K7ep4dNoKfzPA2rEph4\n6TRsqr8lAgMBAAECggEADCeloaIEQVi0c/PxXbgm2umwrGvGlfFu5U8h6zgMagtJ\n7IDTLUDm7+j0Pqxqu6jzd+bSlYTjeNvoGd+RdmtVvty0mMJGbGkrtFTIVkgv4QTD\n1RjtDl/RkDXfcj6jfXLTXIVgVF2RPXpfOIWGeazEUNeDKiVCkjLblq+BYvSmmpm+\ngk5GY2k7m4hraGGqrLTeNl43bgBpdjTyDyTlnPXjJYN9C++fLIA53C8nZUh5GZOy\n9dPa1yuRh+RE9osVzv3CiqtpJuXfwXrsuQSyR6AT8EtcOVNpRot6/yv3VtirIC/b\nEQOjxSmj6tsKkTtY/1vE3ckks3Utxuw74CxogyuH4QKBgQDzOqPAkS/WLQuTyhoD\nGEQfOxyvXTJK9fgCF2ZhE0cJKeuTxqDJmfjNhZGYZlCuSYS+fnGyTMlm6fy1HR6r\ngEQXJh3S9fKk6QZ27yNCDt64nUIRYxkJpMH3mdM88j2bzKPDzml6pkxk67FcEx5q\nUv6QNP2/CnQ60DKeLIYCoBSyoQKBgQDAnk0qs6IKMPvZZK8sdbQ9/c+ccfOLGO5g\nBM2frL0uHUJlfbvQ5sJoCu9lfED7KmkRPu9uLHvQ+J7IDJekbScQhce5Ew78YS2f\n6m5F1ljEeJza8dm8Hhg2O2a6ZBtGFRBHlOssVB0kgmPP23TWoDqh/XMFkyuHJ/qH\ndLtBtB4CBQKBgQDmwGggRd1rRLrqD9+Ttg7SzkLNgA45nZcXbNm9GQvYfsO3I8bg\n3El1udVCDzdV0fu0ucLl1AFyuGP9801oiTyP9aJvxNPZbhWq+f6qKe9UmCTY1/ol\n8v/uBiqodGzMhV2MYyQgruplCFHwN1cwqeJGL2/YMXPJZEHRXA4bKYHZYQKBgDpm\nRIMz32cznsg0rJ/QOAurjmyiZ/K+ZleaXTWSS/FVUbIvwuf9bufYmOiuGY2NODnQ\nWQuQVSHwn0OL/dYOeg+aYAmO67Y9SHX5v+FQsa0v3G7NcPSGM1UOAYF1pIdFD6CE\nWCEih4twNQ7qPKxt/BjtHRiNnF7oEh9LlxK+p3J5AoGAd5QY2e/3jhSHtGrEVqYw\nwHmx3iXFBw0Zl4ZqG5hBj2P9WtPznc6oqhDTsaD6tT673L8coiDHddlAR3G/m7vn\nf5aQbPaDSScfPY9+iaBsHDyeTxEWG3KIyV+tQ087wrkaAYnBfgpipbBGIDPjWsH0\nfTofFHRlSfwWuUjJJJl9PJg=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-s3r4w@ch-ecommerce-e7029.iam.gserviceaccount.com",
        "client_id": "100028806670355655935",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-s3r4w%40ch-ecommerce-e7029.iam.gserviceaccount.com"
    }
}