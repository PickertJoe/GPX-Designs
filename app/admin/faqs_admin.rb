Trestle.resource(:faqs) do
  menu do
    item :faqs, icon: "fa fa-star"
  end

  # Customize the table columns shown on the index view.
  #
  table do
    column :question
    column :answer
    actions
  end

  # Customize the form fields shown on the new/edit views.
  #
  form do |faq|
    text_field :question
    text_field :answer
  end

  # By default, all parameters passed to the update and create actions will be
  # permitted. If you do not have full trust in your users, you should explicitly
  # define the list of permitted parameters.
  #
  # For further information, see the Rails documentation on Strong Parameters:
  #   http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters
  #
  # params do |params|
  #   params.require(:faq).permit(:name, ...)
  # end
end
