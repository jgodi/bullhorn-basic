export const JobCodeMeta = {
    entity: 'ENTITY_NAME',
    entityMetaUrl: '',
    label: 'ENTITY_LABEL',
    fields: [
        {
            name: 'code',
            type: 'text',
            label: 'ID',
            required: true,
            disabled: true,
            sortOrder: 10,
            description: 'This field is auto-populated.',
        },
        {
            name: 'title',
            type: 'text',
            label: 'Title',
            required: true,
            sortOrder: 12,
        },
        {
            name: 'status',
            type: 'text',
            label: 'Status',
            required: true,
            sortOrder: 13,
        },
        {
            name: 'description',
            type: 'text',
            label: 'Description',
            sortOrder: 14,
            required: false,
        },
    ]
};
