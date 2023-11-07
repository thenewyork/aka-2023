import { CaseIcon } from '@sanity/icons';

export default {
	title: 'Project',
	name: 'project',
	type: 'document',
	icon: CaseIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 200,
				slugify: input => input
						.toLowerCase()
						.replace(/\s+/g, '-')
						.slice(0, 200)
			},
			validation: Rule => Rule.required()
		},
		{
			title: "Summary",
			name: "summary",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{title: "Normal", value: "normal"},
					],
					lists: [],
					marks: {
						decorators: [],
					}
				}
			]
		},
		{
			title: "Scope",
			name: "scope",
			type: "array",
			of: [
				{
					type: "string",
				}
			]
		},
		{
			title: "Status",
			name: "status",
			type: "string"
		},
		{
			title: "Description",
			name: "description",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{title: "Normal", value: "normal"},
					],
					lists: [],
					marks: {
						decorators: [],
					}
				}
			]
		},
		{
			title: "Thumbnail Media",
			name: "thumbnailMedia",
			type: "mux.video"
		},
		{
			title: "Image Gallery",
			name: "imageGallery",
			type: "array",
			of: [
				{
					type: "image"
				}
			]
		},
		{
			title: "Credits",
			name: "credits",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{title: "Normal", value: "normal"},
					],
					lists: [],
					marks: {
						decorators: [],
					}
				}
			]
		},
	]
}