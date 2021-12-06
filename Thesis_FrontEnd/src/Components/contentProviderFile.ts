export interface ContentProvider {
    VGG19_Normal: ModelDescription;
    VGG19_Dropout: ModelDescription;
    VGG19_BatchNormalization: ModelDescription;
}

export type ModelDescription = {
    title: string;
    description: string;
    confuison_matrix_data: ConfuisonMatrixData[];
}

export interface ConfuisonMatrixData {
    name: string;
    data: Pair[];
}

export interface Pair {
    x: string;
    y: number;
}

export enum ModelName {
    VGG19_Normal = "VGG19_Normal",
    VGG19_Dropout = "VGG19_Dropout",
    VGG19_BatchNormalization = "VGG19_BatchNormalization"
}


export const contentProvider: ContentProvider =
{
    "VGG19_Normal": {
        "title": "VGG19",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed enim at enim tincidunt sollicitudin eu quis turpis. Donec nisl velit, ultrices ac lectus quis, molestie vestibulum sem. Maecenas varius porttitor elit nec fermentum. Nam vehicula risus sit amet velit sagittis, vel suscipit quam euismod. Duis mattis turpis ut lacinia mollis. Vivamus a massa vestibulum, consequat elit non, efficitur ipsum. Ut et neque eu mi placerat venenatis vitae quis elit. Suspendisse quis nunc ut purus egestas vestibulum semper nec ex. Vivamus commodo neque malesuada enim pellentesque posuere. Aliquam luctus vestibulum mauris, vel iaculis felis semper sed. Curabitur risus dui, viverra et hendrerit sit amet, luctus in tortor.\nPhasellus pulvinar sem eget facilisis porta. Mauris varius, lorem in maximus semper, tortor nibh ultrices urna, vitae tempor orci velit et lacus. Aenean condimentum tempus sem, eget tristique nisi efficitur vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sit amet sem eget nisl egestas viverra at et ex. Curabitur quis elit ac velit accumsan gravida nec eu dui. Donec ullamcorper mi eget malesuada suscipit.\n Nam quis lacus magna. Donec ultrices nec nunc facilisis venenatis. Praesent ornare interdum interdum. Aliquam eu nisl ac eros condimentum aliquet. Mauris rhoncus nisl nec felis sagittis malesuada. Curabitur pretium ultrices eros, nec maximus purus mollis nec. Donec venenatis, arcu vitae iaculis hendrerit, purus ante dapibus enim, non blandit nibh orci sed massa. Donec ut condimentum nulla, non semper nibh. Pellentesque cursus arcu tortor, sed vulputate velit facilisis non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu felis libero. Etiam rutrum aliquet eleifend.\nQuisque venenatis ipsum id pellentesque commodo. Ut congue sapien eu rutrum scelerisque. Nullam ligula diam, ullamcorper molestie nunc sed, consectetur consectetur enim. Phasellus laoreet elementum est, eget luctus nulla finibus ut. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec feugiat ipsum luctus elementum malesuada. Morbi blandit sed nibh in gravida. Ut elementum turpis quis tellus imperdiet commodo. Cras nec risus massa. Nulla nibh eros, vulputate a justo in, aliquet maximus risus. Suspendisse eu tempus orci.",
        "confuison_matrix_data": [
            {
                "name": "1",
                "data": [
                    {
                        "x": "1",
                        "y": 2
                    },
                    {
                        "x": "2",
                        "y": 6
                    },
                    {
                        "x": "3",
                        "y": 10
                    },
                    {
                        "x": "4",
                        "y": 12
                    },
                    {
                        "x": "5",
                        "y": 9
                    }
                ]
            },
            {
                "name": "2",
                "data": [
                    {
                        "x": "1",
                        "y": 2
                    },
                    {
                        "x": "2",
                        "y": 6
                    },
                    {
                        "x": "3",
                        "y": 10
                    },
                    {
                        "x": "4",
                        "y": 12
                    },
                    {
                        "x": "5",
                        "y": 9
                    }
                ]
            },
            {
                "name": "3",
                "data": [
                    {
                        "x": "1",
                        "y": 2
                    },
                    {
                        "x": "2",
                        "y": 6
                    },
                    {
                        "x": "3",
                        "y": 10
                    },
                    {
                        "x": "4",
                        "y": 12
                    },
                    {
                        "x": "5",
                        "y": 9
                    }
                ]
            },
            {
                "name": "4",
                "data": [
                    {
                        "x": "1",
                        "y": 2
                    },
                    {
                        "x": "2",
                        "y": 6
                    },
                    {
                        "x": "3",
                        "y": 10
                    },
                    {
                        "x": "4",
                        "y": 12
                    },
                    {
                        "x": "5",
                        "y": 9
                    }
                ]
            },
            {
                "name": "5",
                "data": [
                    {
                        "x": "1",
                        "y": 2
                    },
                    {
                        "x": "2",
                        "y": 6
                    },
                    {
                        "x": "3",
                        "y": 10
                    },
                    {
                        "x": "4",
                        "y": 12
                    },
                    {
                        "x": "5",
                        "y": 9
                    }
                ]
            }
        ]
    },
    "VGG19_Dropout": {
        "title": "VGG19\nDropout layers",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed enim at enim tincidunt sollicitudin eu quis turpis. Donec nisl velit, ultrices ac lectus quis, molestie vestibulum sem. Maecenas varius porttitor elit nec fermentum. Nam vehicula risus sit amet velit sagittis, vel suscipit quam euismod. Duis mattis turpis ut lacinia mollis. Vivamus a massa vestibulum, consequat elit non, efficitur ipsum. Ut et neque eu mi placerat venenatis vitae quis elit. Suspendisse quis nunc ut purus egestas vestibulum semper nec ex. Vivamus commodo neque malesuada enim pellentesque posuere. Aliquam luctus vestibulum mauris, vel iaculis felis semper sed. Curabitur risus dui, viverra et hendrerit sit amet, luctus in tortor.\nPhasellus pulvinar sem eget facilisis porta. Mauris varius, lorem in maximus semper, tortor nibh ultrices urna, vitae tempor orci velit et lacus. Aenean condimentum tempus sem, eget tristique nisi efficitur vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sit amet sem eget nisl egestas viverra at et ex. Curabitur quis elit ac velit accumsan gravida nec eu dui. Donec ullamcorper mi eget malesuada suscipit.\n Nam quis lacus magna. Donec ultrices nec nunc facilisis venenatis. Praesent ornare interdum interdum. Aliquam eu nisl ac eros condimentum aliquet. Mauris rhoncus nisl nec felis sagittis malesuada. Curabitur pretium ultrices eros, nec maximus purus mollis nec. Donec venenatis, arcu vitae iaculis hendrerit, purus ante dapibus enim, non blandit nibh orci sed massa. Donec ut condimentum nulla, non semper nibh. Pellentesque cursus arcu tortor, sed vulputate velit facilisis non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu felis libero. Etiam rutrum aliquet eleifend.\nQuisque venenatis ipsum id pellentesque commodo. Ut congue sapien eu rutrum scelerisque. Nullam ligula diam, ullamcorper molestie nunc sed, consectetur consectetur enim. Phasellus laoreet elementum est, eget luctus nulla finibus ut. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec feugiat ipsum luctus elementum malesuada. Morbi blandit sed nibh in gravida. Ut elementum turpis quis tellus imperdiet commodo. Cras nec risus massa. Nulla nibh eros, vulputate a justo in, aliquet maximus risus. Suspendisse eu tempus orci.",
        "confuison_matrix_data": [
            {
                "name": "1",
                "data": [
                    {
                        "x": "1",
                        "y": 2
                    },
                    {
                        "x": "2",
                        "y": 53
                    },
                    {
                        "x": "3",
                        "y": 10
                    },
                    {
                        "x": "4",
                        "y": 124
                    },
                    {
                        "x": "5",
                        "y": 95
                    }
                ]
            },
            {
                "name": "2",
                "data": [
                    {
                        "x": "1",
                        "y": 12
                    },
                    {
                        "x": "2",
                        "y": 86
                    },
                    {
                        "x": "3",
                        "y": 310
                    },
                    {
                        "x": "4",
                        "y": 132
                    },
                    {
                        "x": "5",
                        "y": 94
                    }
                ]
            },
            {
                "name": "3",
                "data": [
                    {
                        "x": "1",
                        "y": 22
                    },
                    {
                        "x": "2",
                        "y": 62
                    },
                    {
                        "x": "3",
                        "y": 107
                    },
                    {
                        "x": "4",
                        "y": 127
                    },
                    {
                        "x": "5",
                        "y": 92
                    }
                ]
            },
            {
                "name": "4",
                "data": [
                    {
                        "x": "1",
                        "y": 48
                    },
                    {
                        "x": "2",
                        "y": 4
                    },
                    {
                        "x": "3",
                        "y": 170
                    },
                    {
                        "x": "4",
                        "y": 12
                    },
                    {
                        "x": "5",
                        "y": 6
                    }
                ]
            },
            {
                "name": "5",
                "data": [
                    {
                        "x": "1",
                        "y": 82
                    },
                    {
                        "x": "2",
                        "y": 6
                    },
                    {
                        "x": "3",
                        "y": 110
                    },
                    {
                        "x": "4",
                        "y": 12
                    },
                    {
                        "x": "5",
                        "y": 52
                    }
                ]
            }
        ]
    },
    "VGG19_BatchNormalization": {
        "title": "VGG19\nBatch normalisation layers",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed enim at enim tincidunt sollicitudin eu quis turpis. Donec nisl velit, ultrices ac lectus quis, molestie vestibulum sem. Maecenas varius porttitor elit nec fermentum. Nam vehicula risus sit amet velit sagittis, vel suscipit quam euismod. Duis mattis turpis ut lacinia mollis. Vivamus a massa vestibulum, consequat elit non, efficitur ipsum. Ut et neque eu mi placerat venenatis vitae quis elit. Suspendisse quis nunc ut purus egestas vestibulum semper nec ex. Vivamus commodo neque malesuada enim pellentesque posuere. Aliquam luctus vestibulum mauris, vel iaculis felis semper sed. Curabitur risus dui, viverra et hendrerit sit amet, luctus in tortor.\nPhasellus pulvinar sem eget facilisis porta. Mauris varius, lorem in maximus semper, tortor nibh ultrices urna, vitae tempor orci velit et lacus. Aenean condimentum tempus sem, eget tristique nisi efficitur vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sit amet sem eget nisl egestas viverra at et ex. Curabitur quis elit ac velit accumsan gravida nec eu dui. Donec ullamcorper mi eget malesuada suscipit.\n Nam quis lacus magna. Donec ultrices nec nunc facilisis venenatis. Praesent ornare interdum interdum. Aliquam eu nisl ac eros condimentum aliquet. Mauris rhoncus nisl nec felis sagittis malesuada. Curabitur pretium ultrices eros, nec maximus purus mollis nec. Donec venenatis, arcu vitae iaculis hendrerit, purus ante dapibus enim, non blandit nibh orci sed massa. Donec ut condimentum nulla, non semper nibh. Pellentesque cursus arcu tortor, sed vulputate velit facilisis non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu felis libero. Etiam rutrum aliquet eleifend.\nQuisque venenatis ipsum id pellentesque commodo. Ut congue sapien eu rutrum scelerisque. Nullam ligula diam, ullamcorper molestie nunc sed, consectetur consectetur enim. Phasellus laoreet elementum est, eget luctus nulla finibus ut. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec feugiat ipsum luctus elementum malesuada. Morbi blandit sed nibh in gravida. Ut elementum turpis quis tellus imperdiet commodo. Cras nec risus massa. Nulla nibh eros, vulputate a justo in, aliquet maximus risus. Suspendisse eu tempus orci.",
        "confuison_matrix_data": [
            {
                "name": "1",
                "data": [
                    {
                        "x": "1",
                        "y": 22
                    },
                    {
                        "x": "2",
                        "y": 61
                    },
                    {
                        "x": "3",
                        "y": 110
                    },
                    {
                        "x": "4",
                        "y": 212
                    },
                    {
                        "x": "5",
                        "y": 24
                    }
                ]
            },
            {
                "name": "2",
                "data": [
                    {
                        "x": "1",
                        "y": 42
                    },
                    {
                        "x": "2",
                        "y": 6
                    },
                    {
                        "x": "3",
                        "y": 101
                    },
                    {
                        "x": "4",
                        "y": 112
                    },
                    {
                        "x": "5",
                        "y": 69
                    }
                ]
            },
            {
                "name": "3",
                "data": [
                    {
                        "x": "1",
                        "y": 21
                    },
                    {
                        "x": "2",
                        "y": 64
                    },
                    {
                        "x": "3",
                        "y": 10
                    },
                    {
                        "x": "4",
                        "y": 12
                    },
                    {
                        "x": "5",
                        "y": 95
                    }
                ]
            },
            {
                "name": "4",
                "data": [
                    {
                        "x": "1",
                        "y": 42
                    },
                    {
                        "x": "2",
                        "y": 26
                    },
                    {
                        "x": "3",
                        "y": 97
                    },
                    {
                        "x": "4",
                        "y": 12
                    },
                    {
                        "x": "5",
                        "y": 99
                    }
                ]
            },
            {
                "name": "5",
                "data": [
                    {
                        "x": "1",
                        "y": 2
                    },
                    {
                        "x": "2",
                        "y": 6
                    },
                    {
                        "x": "3",
                        "y": 10
                    },
                    {
                        "x": "4",
                        "y": 12
                    },
                    {
                        "x": "5",
                        "y": 9
                    }
                ]
            }
        ]
    }
}
