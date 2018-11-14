Search.setIndex({docnames:["apps","index","interfaces","platform"],envversion:52,filenames:["apps.rst","index.rst","interfaces.rst","platform.rst"],objects:{"":{apps:[0,0,0,"-"],interfaces:[2,0,0,"-"],walkoff:[3,0,0,"-"]},"apps.App":{device:[0,2,1,""],device_fields:[0,2,1,""],device_type:[0,2,1,""],get_all_devices:[0,3,1,""],shutdown:[0,3,1,""]},"apps.messaging":{AcceptDecline:[0,1,1,""],Message:[0,1,1,""],Text:[0,1,1,""],Url:[0,1,1,""],send_message:[0,5,1,""]},"apps.messaging.AcceptDecline":{from_component_json:[0,4,1,""],message_type:[0,2,1,""]},"apps.messaging.Message":{append:[0,3,1,""],as_json:[0,3,1,""],extend:[0,3,1,""],from_json:[0,4,1,""]},"apps.messaging.Text":{from_component_json:[0,4,1,""],get_component_json:[0,3,1,""],message_type:[0,2,1,""]},"apps.messaging.Url":{from_component_json:[0,4,1,""],get_component_json:[0,3,1,""],message_type:[0,2,1,""]},"interfaces.InterfaceEventDispatcher":{app_action_dispatcher:[2,2,1,""],event_dispatcher:[2,2,1,""],on_action_execution_error:[2,3,1,""],on_action_execution_success:[2,3,1,""],on_action_started:[2,3,1,""],on_app_actions:[2,6,1,""],on_app_instance_created:[2,3,1,""],on_arguments_invalid:[2,3,1,""],on_branch_not_taken:[2,3,1,""],on_branch_taken:[2,3,1,""],on_condition_error:[2,3,1,""],on_condition_success:[2,3,1,""],on_conditional_expression_error:[2,3,1,""],on_conditional_expression_false:[2,3,1,""],on_conditional_expression_true:[2,3,1,""],on_job_added:[2,3,1,""],on_job_error:[2,3,1,""],on_job_executed:[2,3,1,""],on_job_removed:[2,3,1,""],on_scheduler_paused:[2,3,1,""],on_scheduler_resumed:[2,3,1,""],on_scheduler_shutdown:[2,3,1,""],on_scheduler_start:[2,3,1,""],on_transform_error:[2,3,1,""],on_transform_success:[2,3,1,""],on_trigger_action_awaiting_data:[2,3,1,""],on_trigger_action_not_taken:[2,3,1,""],on_trigger_action_taken:[2,3,1,""],on_walkoff_events:[2,6,1,""],on_workflow_aborted:[2,3,1,""],on_workflow_arguments_invalid:[2,3,1,""],on_workflow_arguments_validated:[2,3,1,""],on_workflow_execution_pending:[2,3,1,""],on_workflow_execution_start:[2,3,1,""],on_workflow_paused:[2,3,1,""],on_workflow_resumed:[2,3,1,""],on_workflow_shutdown:[2,3,1,""]},"interfaces.dispatchers":{AppActionEventDispatcher:[2,1,1,""],AppEventDispatcher:[2,1,1,""],CallbackContainer:[2,1,1,""],EventDispatcher:[2,1,1,""]},"interfaces.dispatchers.AppActionEventDispatcher":{action:[2,2,1,""],app:[2,2,1,""],dispatch:[2,3,1,""],is_registered:[2,3,1,""],register_event:[2,3,1,""]},"interfaces.dispatchers.AppEventDispatcher":{dispatch:[2,3,1,""],is_registered:[2,3,1,""],register_app_actions:[2,3,1,""],validate_app_actions:[2,4,1,""]},"interfaces.dispatchers.CallbackContainer":{is_registered:[2,3,1,""],iter_strong:[2,3,1,""],iter_weak:[2,3,1,""],register:[2,3,1,""],strong:[2,2,1,""],weak:[2,2,1,""]},"interfaces.dispatchers.EventDispatcher":{dispatch:[2,3,1,""],is_registered:[2,3,1,""],register_events:[2,3,1,""]},"interfaces.exceptions":{InvalidEventHandler:[2,8,1,""],UnknownEvent:[2,8,1,""]},"interfaces.exceptions.InvalidEventHandler":{message:[2,2,1,""]},"interfaces.exceptions.UnknownEvent":{message:[2,2,1,""]},"interfaces.util":{add_docstring:[2,5,1,""],convert_events:[2,5,1,""],convert_to_iterable:[2,5,1,""],validate_events:[2,5,1,""]},"walkoff.appgateway":{actionresult:[3,0,0,"-"],appcache:[3,0,0,"-"],appinstance:[3,0,0,"-"],appinstancerepo:[3,0,0,"-"],cache_apps:[3,5,1,""],clear_cache:[3,5,1,""],console:[3,0,0,"-"],decorators:[3,0,0,"-"],get_all_actions_for_app:[3,5,1,""],get_all_conditions_for_app:[3,5,1,""],get_all_transforms_for_app:[3,5,1,""],get_app:[3,5,1,""],get_app_action:[3,5,1,""],get_condition:[3,5,1,""],get_transform:[3,5,1,""],is_app_action_bound:[3,5,1,""],validator:[3,0,0,"-"],walkofftag:[3,0,0,"-"]},"walkoff.appgateway.appcache":{AppCache:[3,1,1,""],AppCacheEntry:[3,1,1,""],FunctionEntry:[3,1,1,""]},"walkoff.appgateway.appcache.AppCache":{_cache:[3,2,1,""],cache_apps:[3,3,1,""],clear:[3,3,1,""],get_app:[3,3,1,""],get_app_action:[3,3,1,""],get_app_action_names:[3,3,1,""],get_app_condition:[3,3,1,""],get_app_condition_names:[3,3,1,""],get_app_names:[3,3,1,""],get_app_transform:[3,3,1,""],get_app_transform_names:[3,3,1,""],is_app_action_bound:[3,3,1,""]},"walkoff.appgateway.appcache.AppCacheEntry":{app_name:[3,2,1,""],cache_app_class:[3,3,1,""],cache_functions:[3,3,1,""],clear_bound_functions:[3,3,1,""],get_run:[3,3,1,""],get_tagged_functions:[3,3,1,""],is_bound:[3,3,1,""],main:[3,2,1,""]},"walkoff.appgateway.appcache.FunctionEntry":{is_bound:[3,2,1,""],run:[3,2,1,""],tags:[3,2,1,""]},"walkoff.appgateway.appinstancerepo":{AppInstanceRepo:[3,1,1,""]},"walkoff.appgateway.appinstancerepo.AppInstanceRepo":{_instances:[3,2,1,""],get_all_app_instances:[3,3,1,""],get_app_instance:[3,3,1,""],set_all_app_instances:[3,3,1,""],setup_app_instance:[3,3,1,""],shutdown_instances:[3,3,1,""]},"walkoff.appgateway.console":{ConsoleLoggingHandler:[3,1,1,""]},"walkoff.appgateway.console.ConsoleLoggingHandler":{emit:[3,3,1,""]},"walkoff.appgateway.decorators":{action:[3,5,1,""],condition:[3,5,1,""],format_result:[3,5,1,""],tag:[3,5,1,""],transform:[3,5,1,""]},"walkoff.appgateway.walkofftag":{WalkoffTag:[3,1,1,""]},"walkoff.cache":{DiskCacheAdapter:[3,1,1,""],DiskPubSubCache:[3,1,1,""],DiskSubscription:[3,1,1,""],cache_translation:[3,7,1,""],make_cache:[3,5,1,""],unsubscribe_message:[3,7,1,""]},"walkoff.cache.DiskCacheAdapter":{add:[3,3,1,""],cache:[3,2,1,""],clear:[3,3,1,""],decr:[3,3,1,""],directory:[3,2,1,""],from_json:[3,6,1,""],get:[3,3,1,""],incr:[3,3,1,""],lpop:[3,3,1,""],lpush:[3,3,1,""],publish:[3,3,1,""],pubsub_cache:[3,2,1,""],register_callbacks:[3,3,1,""],retry:[3,2,1,""],rpop:[3,3,1,""],rpush:[3,3,1,""],set:[3,3,1,""],shutdown:[3,3,1,""],subscribe:[3,3,1,""],unsubscribe:[3,3,1,""]},"walkoff.cache.DiskPubSubCache":{_push_partial:[3,2,1,""],_threads_registered:[3,2,1,""],cache:[3,2,1,""],publish:[3,3,1,""],register_callbacks:[3,3,1,""],shutdown:[3,3,1,""],subscribe:[3,3,1,""]},"walkoff.cache.DiskSubscription":{_listener:[3,2,1,""],_result:[3,2,1,""],_sync:[3,2,1,""],channel:[3,2,1,""],listen:[3,3,1,""],push:[3,3,1,""]},"walkoff.case":{database:[3,0,0,"-"],logger:[3,0,0,"-"],subscription:[3,0,0,"-"]},"walkoff.case.database":{Case:[3,1,1,""],CaseDatabase:[3,1,1,""],Event:[3,1,1,""]},"walkoff.case.database.Case":{as_json:[3,3,1,""]},"walkoff.case.database.CaseDatabase":{add_event:[3,3,1,""],case_events_as_json:[3,3,1,""],cases_as_json:[3,3,1,""],commit:[3,3,1,""],edit_event_note:[3,3,1,""],event_as_json:[3,3,1,""],rename_case:[3,3,1,""],tear_down:[3,3,1,""]},"walkoff.case.database.Event":{as_json:[3,3,1,""]},"walkoff.case.logger":{CaseLogger:[3,1,1,""]},"walkoff.case.logger.CaseLogger":{_repository:[3,2,1,""],add_subscriptions:[3,3,1,""],clear_subscriptions:[3,3,1,""],delete_case:[3,3,1,""],log:[3,3,1,""],subscriptions:[3,2,1,""],update_subscriptions:[3,3,1,""]},"walkoff.case.subscription":{Subscription:[3,1,1,""],SubscriptionCache:[3,1,1,""],logger:[3,7,1,""]},"walkoff.case.subscription.Subscription":{events:[3,2,1,""],id:[3,2,1,""]},"walkoff.case.subscription.SubscriptionCache":{add_subscriptions:[3,3,1,""],clear:[3,3,1,""],delete_case:[3,3,1,""],get_cases_subscribed:[3,3,1,""],update_subscriptions:[3,3,1,""]},"walkoff.config":{initialize:[3,5,1,""],load_app_apis:[3,5,1,""]},"walkoff.events":{ActionSignal:[3,1,1,""],BranchSignal:[3,1,1,""],ConditionSignal:[3,1,1,""],ConditionalExpressionSignal:[3,1,1,""],ControllerSignal:[3,1,1,""],EventType:[3,1,1,""],TransformSignal:[3,1,1,""],WalkoffEvent:[3,1,1,""],WalkoffSignal:[3,1,1,""],WorkflowSignal:[3,1,1,""]},"walkoff.events.ControllerSignal":{scheduler_event:[3,2,1,""]},"walkoff.events.WalkoffSignal":{connect:[3,3,1,""],event_type:[3,2,1,""],is_loggable:[3,2,1,""],is_sent_to_interfaces:[3,2,1,""],message:[3,2,1,""],name:[3,2,1,""],send:[3,3,1,""],signal:[3,2,1,""]},"walkoff.executiondb":{ActionStatusEnum:[3,1,1,""],ExecutionDatabase:[3,1,1,""],WorkflowStatusEnum:[3,1,1,""],action:[3,0,0,"-"],argument:[3,0,0,"-"],branch:[3,0,0,"-"],condition:[3,0,0,"-"],conditionalexpression:[3,0,0,"-"],device:[3,0,0,"-"],executionelement:[3,0,0,"-"],metrics:[3,0,0,"-"],playbook:[3,0,0,"-"],position:[3,0,0,"-"],saved_workflow:[3,0,0,"-"],schemas:[3,0,0,"-"],transform:[3,0,0,"-"],validatable:[3,0,0,"-"],workflow:[3,0,0,"-"],workflowresults:[3,0,0,"-"]},"walkoff.executiondb.action":{Action:[3,1,1,""]},"walkoff.executiondb.action.Action":{execute:[3,3,1,""],execute_trigger:[3,3,1,""],get_execution_id:[3,3,1,""],get_output:[3,3,1,""],init_on_load:[3,3,1,""],validate:[3,3,1,""]},"walkoff.executiondb.argument":{Argument:[3,1,1,""]},"walkoff.executiondb.argument.Argument":{get_value:[3,3,1,""],init_on_load:[3,3,1,""],is_ref:[3,2,1,""],update_value_reference:[3,3,1,""],validate:[3,3,1,""]},"walkoff.executiondb.branch":{Branch:[3,1,1,""]},"walkoff.executiondb.branch.Branch":{execute:[3,3,1,""],init_on_load:[3,3,1,""]},"walkoff.executiondb.condition":{Condition:[3,1,1,""]},"walkoff.executiondb.condition.Condition":{execute:[3,3,1,""],init_on_load:[3,3,1,""],validate:[3,3,1,""]},"walkoff.executiondb.conditionalexpression":{ConditionalExpression:[3,1,1,""]},"walkoff.executiondb.conditionalexpression.ConditionalExpression":{execute:[3,3,1,""],init_on_load:[3,3,1,""]},"walkoff.executiondb.device":{App:[3,1,1,""],Device:[3,1,1,""],DeviceField:[3,1,1,""],DeviceFieldMixin:[3,1,1,""],EncryptedDeviceField:[3,1,1,""],UnknownDeviceField:[3,8,1,""],get_all_devices_for_app:[3,5,1,""],get_all_devices_of_type_from_app:[3,5,1,""],get_app:[3,5,1,""],get_device:[3,5,1,""],get_device_ids_by_fields:[3,5,1,""]},"walkoff.executiondb.device.App":{add_device:[3,3,1,""],as_json:[3,3,1,""],devices:[3,2,1,""],from_json:[3,4,1,""],get_device:[3,3,1,""],get_devices_of_type:[3,3,1,""],id:[3,2,1,""],name:[3,2,1,""]},"walkoff.executiondb.device.Device":{app_id:[3,2,1,""],as_json:[3,3,1,""],created_at:[3,2,1,""],description:[3,2,1,""],encrypted_fields:[3,2,1,""],from_json:[3,4,1,""],get_encrypted_field:[3,3,1,""],get_plaintext_fields:[3,3,1,""],id:[3,2,1,""],modified_at:[3,2,1,""],name:[3,2,1,""],plaintext_fields:[3,2,1,""],type:[3,2,1,""],update_from_json:[3,3,1,""]},"walkoff.executiondb.device.DeviceField":{as_json:[3,3,1,""],from_json:[3,4,1,""],value:[3,2,1,""]},"walkoff.executiondb.device.DeviceFieldMixin":{id:[3,2,1,""],name:[3,2,1,""],type:[3,2,1,""]},"walkoff.executiondb.device.EncryptedDeviceField":{as_json:[3,3,1,""],from_json:[3,4,1,""],value:[3,2,1,""]},"walkoff.executiondb.metrics":{ActionMetric:[3,1,1,""],ActionStatusMetric:[3,1,1,""],AppMetric:[3,1,1,""],WorkflowMetric:[3,1,1,""]},"walkoff.executiondb.metrics.ActionMetric":{action_id:[3,2,1,""],action_name:[3,2,1,""],action_statuses:[3,2,1,""],app_metric_id:[3,2,1,""],as_json:[3,3,1,""],get_action_status:[3,3,1,""],id:[3,2,1,""]},"walkoff.executiondb.metrics.ActionStatusMetric":{action_metric_id:[3,2,1,""],as_json:[3,3,1,""],avg_time:[3,2,1,""],count:[3,2,1,""],id:[3,2,1,""],status:[3,2,1,""],update:[3,3,1,""]},"walkoff.executiondb.metrics.AppMetric":{actions:[3,2,1,""],app:[3,2,1,""],as_json:[3,3,1,""],count:[3,2,1,""],get_action_by_id:[3,3,1,""],id:[3,2,1,""]},"walkoff.executiondb.metrics.WorkflowMetric":{as_json:[3,3,1,""],avg_time:[3,2,1,""],count:[3,2,1,""],id:[3,2,1,""],update:[3,3,1,""],workflow_id:[3,2,1,""],workflow_name:[3,2,1,""]},"walkoff.executiondb.playbook":{Playbook:[3,1,1,""]},"walkoff.executiondb.playbook.Playbook":{add_workflow:[3,3,1,""],get_all_workflow_ids:[3,3,1,""],get_all_workflow_names:[3,3,1,""],get_all_workflow_representations:[3,3,1,""],get_all_workflows_as_limited_json:[3,3,1,""],get_workflow_by_id:[3,3,1,""],get_workflow_by_name:[3,3,1,""],has_workflow_id:[3,3,1,""],has_workflow_name:[3,3,1,""],remove_workflow_by_name:[3,3,1,""],rename_workflow:[3,3,1,""]},"walkoff.executiondb.position":{Position:[3,1,1,""]},"walkoff.executiondb.saved_workflow":{SavedWorkflow:[3,1,1,""]},"walkoff.executiondb.saved_workflow.SavedWorkflow":{from_workflow:[3,6,1,""]},"walkoff.executiondb.schemas":{ActionSchema:[3,1,1,""],ActionableSchema:[3,1,1,""],ArgumentSchema:[3,1,1,""],BranchSchema:[3,1,1,""],ConditionSchema:[3,1,1,""],ConditionalExpressionSchema:[3,1,1,""],ExecutionBaseSchema:[3,1,1,""],ExecutionElementBaseSchema:[3,1,1,""],PlaybookSchema:[3,1,1,""],PositionSchema:[3,1,1,""],TransformSchema:[3,1,1,""],WorkflowSchema:[3,1,1,""],dump_element:[3,5,1,""]},"walkoff.executiondb.schemas.ArgumentSchema":{make_instance:[3,3,1,""]},"walkoff.executiondb.schemas.ExecutionBaseSchema":{load:[3,3,1,""],remove_skip_values:[3,3,1,""]},"walkoff.executiondb.transform":{Transform:[3,1,1,""]},"walkoff.executiondb.transform.Transform":{execute:[3,3,1,""],init_on_load:[3,3,1,""],validate:[3,3,1,""]},"walkoff.executiondb.workflow":{Workflow:[3,1,1,""]},"walkoff.executiondb.workflow.Workflow":{abort:[3,3,1,""],execute:[3,3,1,""],get_accumulator:[3,3,1,""],get_action_by_id:[3,3,1,""],get_branch:[3,3,1,""],get_executing_action:[3,3,1,""],get_executing_action_id:[3,3,1,""],get_execution_id:[3,3,1,""],get_instances:[3,3,1,""],init_on_load:[3,3,1,""],pause:[3,3,1,""],remove_action:[3,3,1,""],set_execution_id:[3,3,1,""],validate:[3,3,1,""]},"walkoff.executiondb.workflowresults":{ActionStatus:[3,1,1,""],WorkflowStatus:[3,1,1,""]},"walkoff.executiondb.workflowresults.ActionStatus":{_workflow_status_id:[3,2,1,""],aborted:[3,3,1,""],action_id:[3,2,1,""],action_name:[3,2,1,""],app_name:[3,2,1,""],arguments:[3,2,1,""],as_json:[3,3,1,""],awaiting_data:[3,3,1,""],completed_at:[3,2,1,""],completed_failure:[3,3,1,""],completed_success:[3,3,1,""],execution_id:[3,2,1,""],name:[3,2,1,""],result:[3,2,1,""],running:[3,3,1,""],started_at:[3,2,1,""],status:[3,2,1,""]},"walkoff.executiondb.workflowresults.WorkflowStatus":{_action_statuses:[3,2,1,""],aborted:[3,3,1,""],add_action_status:[3,3,1,""],as_json:[3,3,1,""],awaiting_data:[3,3,1,""],completed:[3,3,1,""],completed_at:[3,2,1,""],execution_id:[3,2,1,""],name:[3,2,1,""],paused:[3,3,1,""],running:[3,3,1,""],started_at:[3,2,1,""],status:[3,2,1,""],workflow_id:[3,2,1,""]},"walkoff.helpers":{InvalidApi:[3,8,1,""],InvalidAppStructure:[3,8,1,""],InvalidArgument:[3,8,1,""],InvalidExecutionElement:[3,8,1,""],UnknownApp:[3,8,1,""],UnknownAppAction:[3,8,1,""],UnknownCondition:[3,8,1,""],UnknownDevice:[3,8,1,""],UnknownFunction:[3,8,1,""],UnknownTransform:[3,8,1,""],construct_module_name_from_path:[3,5,1,""],format_db_path:[3,5,1,""],get_app_action_api:[3,5,1,""],get_app_action_default_return:[3,5,1,""],get_app_action_return_is_failure:[3,5,1,""],import_app_main:[3,5,1,""],import_py_file:[3,5,1,""],import_submodules:[3,5,1,""],list_apps:[3,5,1,""],locate_playbooks_in_directory:[3,5,1,""]},"walkoff.messaging":{MessageAction:[3,1,1,""],MessageActionEvent:[3,1,1,""],utils:[3,0,0,"-"]},"walkoff.multiprocessedexecutor":{multiprocessedexecutor:[3,0,0,"-"],proto_helpers:[3,0,0,"-"],threadauthenticator:[3,0,0,"-"],worker:[3,0,0,"-"],workflowexecutioncontroller:[3,0,0,"-"]},"walkoff.multiprocessedexecutor.multiprocessedexecutor":{spawn_worker_processes:[3,5,1,""]},"walkoff.multiprocessedexecutor.proto_helpers":{add_arguments_to_action_proto:[3,5,1,""],add_sender_to_action_packet_proto:[3,5,1,""],add_workflow_to_proto:[3,5,1,""],convert_action_to_proto:[3,5,1,""],convert_branch_transform_condition_to_proto:[3,5,1,""],convert_log_message_to_protobuf:[3,5,1,""],convert_send_message_to_protobuf:[3,5,1,""],convert_to_protobuf:[3,5,1,""],convert_workflow_to_proto:[3,5,1,""],set_argument_proto:[3,5,1,""]},"walkoff.multiprocessedexecutor.threadauthenticator":{AuthenticationThread:[3,1,1,""],ThreadAuthenticator:[3,1,1,""]},"walkoff.multiprocessedexecutor.threadauthenticator.AuthenticationThread":{run:[3,3,1,""]},"walkoff.multiprocessedexecutor.threadauthenticator.ThreadAuthenticator":{is_alive:[3,3,1,""],start:[3,3,1,""],stop:[3,3,1,""]},"walkoff.multiprocessedexecutor.worker":{CaseCommunicationMessageData:[3,1,1,""],CaseCommunicationMessageType:[3,1,1,""],WorkerCommunicationMessageData:[3,1,1,""],WorkerCommunicationMessageType:[3,1,1,""],WorkflowCommunicationMessageData:[3,1,1,""],WorkflowCommunicationMessageType:[3,1,1,""]},"walkoff.multiprocessedexecutor.worker.CaseCommunicationMessageData":{case_id:[3,2,1,""],subscriptions:[3,2,1,""],type:[3,2,1,""]},"walkoff.multiprocessedexecutor.worker.WorkerCommunicationMessageData":{data:[3,2,1,""],type:[3,2,1,""]},"walkoff.multiprocessedexecutor.worker.WorkflowCommunicationMessageData":{type:[3,2,1,""],workflow_execution_id:[3,2,1,""]},"walkoff.multiprocessedexecutor.workflowexecutioncontroller":{format_message_event_data:[3,5,1,""]},"walkoff.scheduler":{InvalidTriggerArgs:[3,8,1,""],construct_task_id:[3,5,1,""],split_task_id:[3,5,1,""]},"walkoff.server":{app:[3,0,0,"-"],blueprints:[3,0,0,"-"],context:[3,0,0,"-"],decorators:[3,0,0,"-"],endpoints:[3,0,0,"-"],problem:[3,0,0,"-"],returncodes:[3,0,0,"-"],workflowresults:[3,0,0,"-"]},"walkoff.server.blueprints":{console:[3,0,0,"-"],custominterface:[3,0,0,"-"],notifications:[3,0,0,"-"],root:[3,0,0,"-"],workflowresults:[3,0,0,"-"]},"walkoff.server.blueprints.notifications":{NotificationSseEvent:[3,1,1,""]},"walkoff.server.endpoints":{appapi:[3,0,0,"-"],auth:[3,0,0,"-"],cases:[3,0,0,"-"],configuration:[3,0,0,"-"],devices:[3,0,0,"-"],events:[3,0,0,"-"],messages:[3,0,0,"-"],metadata:[3,0,0,"-"],metrics:[3,0,0,"-"],playbooks:[3,0,0,"-"],roles:[3,0,0,"-"],scheduler:[3,0,0,"-"],system:[3,0,0,"-"],triggers:[3,0,0,"-"],users:[3,0,0,"-"],workflowqueue:[3,0,0,"-"]},"walkoff.server.endpoints.metadata":{validate_path:[3,5,1,""]},"walkoff.server.problem":{Problem:[3,1,1,""]},"walkoff.serverdb":{add_user:[3,5,1,""],casesubscription:[3,0,0,"-"],clear_resources_for_role:[3,5,1,""],get_all_available_resource_actions:[3,5,1,""],initialize_default_resources_admin:[3,5,1,""],initialize_default_resources_guest:[3,5,1,""],message:[3,0,0,"-"],mixins:[3,0,0,"-"],remove_user:[3,5,1,""],resource:[3,0,0,"-"],role:[3,0,0,"-"],scheduledtasks:[3,0,0,"-"],set_resources_for_role:[3,5,1,""],tokens:[3,0,0,"-"],user:[3,0,0,"-"]},"walkoff.serverdb.casesubscription":{CaseSubscription:[3,1,1,""]},"walkoff.serverdb.casesubscription.CaseSubscription":{as_json:[3,3,1,""],from_json:[3,4,1,""]},"walkoff.serverdb.message":{Message:[3,1,1,""],MessageHistory:[3,1,1,""]},"walkoff.serverdb.message.Message":{as_json:[3,3,1,""],body:[3,2,1,""],created_at:[3,2,1,""],get_read_by:[3,3,1,""],history:[3,2,1,""],id:[3,2,1,""],is_authorized:[3,3,1,""],is_responded:[3,3,1,""],record_user_action:[3,3,1,""],requires_reauth:[3,2,1,""],requires_response:[3,2,1,""],roles:[3,2,1,""],subject:[3,2,1,""],user_has_read:[3,3,1,""],user_last_read_at:[3,3,1,""],users:[3,2,1,""],workflow_execution_id:[3,2,1,""]},"walkoff.serverdb.message.MessageHistory":{action:[3,2,1,""],as_json:[3,3,1,""],id:[3,2,1,""],timestamp:[3,2,1,""],user_id:[3,2,1,""],username:[3,2,1,""]},"walkoff.serverdb.resource":{Permission:[3,1,1,""],Resource:[3,1,1,""]},"walkoff.serverdb.resource.Resource":{as_json:[3,3,1,""],set_permissions:[3,3,1,""]},"walkoff.serverdb.role":{Role:[3,1,1,""]},"walkoff.serverdb.role.Role":{as_json:[3,3,1,""],set_resources:[3,3,1,""]},"walkoff.serverdb.scheduledtasks":{ScheduledTask:[3,1,1,""],ScheduledWorkflow:[3,1,1,""]},"walkoff.serverdb.scheduledtasks.ScheduledTask":{as_json:[3,3,1,""],description:[3,2,1,""],id:[3,2,1,""],name:[3,2,1,""],start:[3,3,1,""],status:[3,2,1,""],stop:[3,3,1,""],trigger_args:[3,2,1,""],trigger_type:[3,2,1,""],update:[3,3,1,""],workflows:[3,2,1,""]},"walkoff.serverdb.scheduledtasks.ScheduledWorkflow":{id:[3,2,1,""],workflow_id:[3,2,1,""]},"walkoff.serverdb.tokens":{BlacklistedToken:[3,1,1,""],approve_token:[3,5,1,""],is_token_revoked:[3,5,1,""],prune_database:[3,5,1,""],prune_if_necessary:[3,5,1,""],revoke_token:[3,5,1,""]},"walkoff.serverdb.tokens.BlacklistedToken":{as_json:[3,3,1,""]},"walkoff.serverdb.user":{User:[3,1,1,""]},"walkoff.serverdb.user.User":{as_json:[3,3,1,""],has_role:[3,3,1,""],login:[3,3,1,""],logout:[3,3,1,""],password:[3,2,1,""],set_roles:[3,3,1,""],verify_password:[3,3,1,""]},"walkoff.sse":{FilteredInterfaceSseStream:[3,1,1,""],FilteredSseStream:[3,1,1,""],InterfaceSseStream:[3,1,1,""],SseEvent:[3,1,1,""],SseStream:[3,1,1,""],StreamableBlueprint:[3,1,1,""],create_interface_channel_name:[3,5,1,""]},"walkoff.sse.FilteredInterfaceSseStream":{"interface":[3,2,1,""]},"walkoff.sse.FilteredSseStream":{create_subchannel_name:[3,3,1,""],publish:[3,3,1,""],stream:[3,3,1,""],subscribe:[3,3,1,""],unsubscribe:[3,3,1,""]},"walkoff.sse.InterfaceSseStream":{"interface":[3,2,1,""]},"walkoff.sse.SseEvent":{data:[3,2,1,""],event:[3,2,1,""],format:[3,3,1,""]},"walkoff.sse.SseStream":{_default_headers:[3,2,1,""],channel:[3,2,1,""],publish:[3,3,1,""],push:[3,3,1,""],send:[3,3,1,""],stream:[3,3,1,""],subscribe:[3,3,1,""],unsubscribe:[3,3,1,""]},apps:{App:[0,1,1,""],messaging:[0,0,0,"-"]},interfaces:{AppBlueprint:[2,1,1,""],InterfaceEventDispatcher:[2,1,1,""],dispatcher:[2,7,1,""],dispatchers:[2,0,0,"-"],exceptions:[2,0,0,"-"],util:[2,0,0,"-"]},walkoff:{"case":[3,0,0,"-"],appgateway:[3,0,0,"-"],cache:[3,0,0,"-"],config:[3,0,0,"-"],events:[3,0,0,"-"],executiondb:[3,0,0,"-"],extensions:[3,0,0,"-"],helpers:[3,0,0,"-"],messaging:[3,0,0,"-"],multiprocessedexecutor:[3,0,0,"-"],proto:[3,0,0,"-"],scheduler:[3,0,0,"-"],security:[3,0,0,"-"],server:[3,0,0,"-"],serverdb:[3,0,0,"-"],sse:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","staticmethod","Python static method"],"5":["py","function","Python function"],"6":["py","classmethod","Python class method"],"7":["py","data","Python data"],"8":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:staticmethod","5":"py:function","6":"py:classmethod","7":"py:data","8":"py:exception"},terms:{"boolean":[2,3],"case":1,"class":[0,2,3],"default":[0,2,3],"enum":3,"export":3,"float":3,"function":[0,2,3],"import":3,"int":[0,2,3],"new":3,"null":3,"return":[0,2,3],"short":3,"static":[0,2,3],"true":[2,3],Added:2,Has:3,IDS:2,IDs:[0,2,3],NOT:[0,3],Not:2,One:3,The:[0,1,2,3],These:3,Was:3,__new__:2,__unsubscribe__:3,_action_status:3,_app:[],_cach:3,_default_head:3,_event_rout:2,_instanc:3,_listen:3,_push_parti:3,_repositori:3,_result:3,_router:2,_subscrib:3,_sync:3,_threads_regist:3,_workflow_status_id:3,abil:3,abort:[2,3],about:3,accept:0,accept_declin:0,acceptdeclin:0,access:3,accumul:3,across:3,action:[0,2,3],action_id:3,action_metric_id:3,action_nam:3,action_packet:3,action_statu:3,action_status:3,actionableschema:3,actionargumentsinvalid:2,actionexecutionerror:2,actionexecutionsuccess:2,actionmetr:3,actionresult:3,actionschema:3,actionsign:[2,3],actionstart:2,actionstatu:3,actionstatusenum:3,actionstatusmetr:3,actual:3,adapt:3,add:[0,2,3],add_action_statu:3,add_arguments_to_action_proto:3,add_devic:3,add_docstr:2,add_ev:3,add_sender_to_action_packet_proto:3,add_subscript:3,add_us:3,add_workflow:3,add_workflow_to_proto:3,added:[2,3],adding:3,addit:3,address:3,admin:3,against:[2,3],agent:3,alia:[2,3],all:[0,2,3],allow:[2,3],allowed_device_field_typ:3,allowed_ev:2,alreadi:[2,3],also:3,alwai:[2,3],amount:3,ani:[2,3],api:[1,2,3],app:[1,2],app_action_dispatch:2,app_class:3,app_id:3,app_inst:3,app_metric_id:3,app_nam:3,app_path:3,appactioneventdispatch:2,appblueprint:2,appcach:3,appcacheentri:3,appdevic:0,appear:3,append:[0,3],appeventdispatch:2,appgatewai:3,appinst:3,appinstancecr:2,appinstancerepo:3,appmetr:3,appropri:3,approv:3,approve_token:3,apps_path:3,apschedul:3,arg:3,arg_obj:3,arg_proto:3,argument:[2,3],argumentschema:3,around:3,arriv:3,as_json:[0,3],associ:[0,2,3],asyncresult:3,attach:3,attribut:[0,3],authent:3,authenticationthread:3,author:3,automat:3,avail:3,available_ev:2,averag:3,avg_tim:3,avoid:3,await:[2,3],awaiting_data:3,back:3,background:3,base:[0,3],becaus:3,becom:3,been:3,befor:3,being:[2,3],between:3,blacklistedtoken:3,blank:3,blinker:3,block:3,blueprint:1,bodi:[0,3],bool:[0,2,3],both:[1,2,3],bound:3,branch:[2,3],branchnottaken:2,branchschema:3,branchsign:[2,3],branchtaken:2,brief:3,broken:3,bump:1,button:0,cach:3,cache_app:3,cache_app_class:3,cache_funct:3,cache_transl:3,call:3,callback:[2,3],callback_nam:3,callbackcontain:2,can:3,capabl:3,case_db_path:3,case_db_typ:3,case_events_as_json:3,case_id:3,case_subscript:3,casecommunicationmessagedata:3,casecommunicationmessagetyp:3,casedatabas:3,caselogg:3,cases_as_json:3,casesubscript:3,cast:3,caught:2,caus:[1,2],chang:[1,3],channel:3,check:[2,3],child_express:3,classmethod:[2,3],clear:3,clear_bound_funct:3,clear_cach:3,clear_resources_for_rol:3,clear_subscript:3,client:3,close:3,cls:3,code:3,collis:3,column:3,come:3,commit:3,commonworkflowsign:2,complet:3,complete_object:3,completed_at:3,completed_failur:3,completed_success:3,compli:3,compon:0,condit:[2,3],condition_nam:3,conditionalexpress:3,conditionalexpressionerror:2,conditionalexpressionfals:2,conditionalexpressionschema:3,conditionalexpressionsign:[2,3],conditionalexpressiontru:2,conditionerror:2,conditionschema:3,conditionsign:[2,3],conditionsuccess:2,config:3,config_path:3,configur:3,connect:3,consid:3,consol:3,consolelog:2,consolelogginghandl:3,construct:[0,3],construct_module_name_from_path:3,construct_task_id:3,constructor:0,contain:[0,2,3],content:[],context:3,continu:3,contributor:1,control:[2,3],controllersign:[2,3],convert:[2,3],convert_action_to_proto:3,convert_branch_transform_condition_to_proto:3,convert_ev:2,convert_log_message_to_protobuf:3,convert_send_message_to_protobuf:3,convert_to_iter:2,convert_to_protobuf:3,convert_workflow_to_proto:3,correct:2,correspond:[2,3],cost:3,could:2,count:3,creat:[2,3],create_interface_channel_nam:3,create_subchannel_nam:3,created_at:3,creation:3,cron:3,current:[0,3],current_act:3,data:[2,3],data_in:3,databas:1,date:3,datetim:3,db_type:3,declin:0,decod:3,decoded_token:3,decor:[2,3],decr:3,decrement:3,decrypt:3,def:2,defin:[2,3],definit:3,delet:3,delete_cas:3,deprec:2,dequ:3,derefer:3,dereferenc:3,descript:3,deseri:3,desir:3,destin:3,destination_id:3,detail:3,determin:3,develop:1,devic:[0,2,3],device_field:0,device_id:[2,3],device_nam:3,device_typ:[0,3],devicedb:[0,3],devicefield:3,devicefieldmixin:3,dict:[0,2,3],dictionari:3,differ:3,directori:3,disk:3,diskcach:3,diskcacheadapt:3,diskpubsubcach:3,disksubscript:3,dispatch:[2,3],docstr:2,document:3,doe:[0,2,3],don:3,done:3,down:3,dump:3,dump_el:3,dynam:[2,3],each:3,ear:3,edit:3,edit_event_not:3,effici:3,either:[2,3],element:[2,3],els:3,emit:3,empti:[0,3],encod:3,encount:2,encrypt:3,encrypted_field:3,encrypteddevicefield:3,end:3,endpoint:1,ensur:3,entir:0,entiti:3,entri:[2,3],error:[2,3],etc:3,evalu:3,even:2,event:[2,3],event_:2,event_as_json:3,event_dispatch:2,event_id:3,event_typ:3,eventdispatch:2,eventtyp:[2,3],exactli:2,except:[2,3],execut:[1,2],execute_trigg:3,execution_db:3,execution_db_path:3,execution_db_typ:3,execution_id:3,execution_tim:3,executionbaseschema:3,executiondatabas:3,executiondb:3,executionel:3,executionelementbaseschema:3,executor:1,exist:[2,3],expand:2,expir:3,explan:3,express:[2,3],ext:3,extend:0,extra:3,extract:3,factori:3,failur:3,fall:3,fals:[0,2,3],fanoutcach:3,ffrom:3,field:[0,3],field_nam:3,field_typ:3,field_valu:3,file:3,filenam:3,filter:3,filteredinterfacessestream:3,filteredssestream:3,find:[1,3],finish:3,first:[1,3],flask:3,folder:3,forbidden:3,foreign:3,form:[2,3],format:3,format_db_path:3,format_message_event_data:3,format_result:3,found:[2,3],from:[0,2,3],from_component_json:0,from_json:[0,3],from_workflow:3,full:3,full_act:3,fulli:3,func:[2,3],func_nam:3,function_nam:3,function_typ:3,functionentri:3,further:3,gatewai:1,gener:[2,3],generate_module_autodoc:[],get:[0,1,3],get_accumul:3,get_action_by_id:3,get_action_statu:3,get_all_actions_for_app:3,get_all_app_inst:3,get_all_available_resource_act:3,get_all_conditions_for_app:3,get_all_devic:0,get_all_devices_for_app:3,get_all_devices_of_type_from_app:3,get_all_transforms_for_app:3,get_all_workflow_id:3,get_all_workflow_nam:3,get_all_workflow_represent:3,get_all_workflows_as_limited_json:3,get_app:3,get_app_act:3,get_app_action_api:3,get_app_action_default_return:3,get_app_action_nam:3,get_app_action_return_is_failur:3,get_app_condit:3,get_app_condition_nam:3,get_app_inst:3,get_app_nam:3,get_app_transform:3,get_app_transform_nam:3,get_branch:3,get_cases_subscrib:3,get_component_json:0,get_condit:3,get_devic:3,get_device_ids_by_field:3,get_devices_of_typ:3,get_encrypted_field:3,get_executing_act:3,get_executing_action_id:3,get_execution_id:3,get_inst:3,get_output:3,get_plaintext_field:3,get_read_bi:3,get_run:3,get_tagged_funct:3,get_transform:3,get_valu:3,get_workflow_by_id:3,get_workflow_by_nam:3,github:1,give:[2,3],given:[2,3],global:[2,3],going:3,group:3,guarante:[1,2],guest:3,handl:[2,3],handler:2,happen:3,has:[2,3],has_rol:3,has_workflow_id:3,has_workflow_nam:3,have:[2,3],haven:3,header:3,help:[1,3],helper:[0,3],here:1,hex:3,histori:3,hold:[2,3],howev:[1,3],html:3,http:3,human:3,hyperlink:0,id_:3,identifi:3,ids:3,ietf:3,implement:[0,3],import_app_main:3,import_nam:2,import_py_fil:3,import_submodul:3,includ:3,incorrect:2,incr:3,increment:3,index:1,indic:3,inform:3,init_on_load:3,initi:[2,3],initialize_default_resources_admin:3,initialize_default_resources_guest:3,input:3,insert:3,insid:3,instanc:[2,3],integ:3,intend:[0,1,2,3],interfac:[1,3],interfaceeventdispatch:2,interfacessestream:3,intern:3,interv:3,invalid:2,invalidapi:3,invalidappstructur:3,invalidargu:3,invalideventhandl:2,invalidexecutionel:3,invalidtriggerarg:3,ip_address:3,is_al:3,is_app_action_bound:3,is_author:3,is_bound:3,is_logg:3,is_neg:3,is_ref:3,is_regist:2,is_respond:3,is_sent_to_interfac:3,is_token_revok:3,iter:[0,2,3],iter_strong:2,iter_weak:2,its:[0,2,3],itself:1,job:2,json:[0,3],json_in:[0,3],just:3,keep:3,kei:3,keyword:3,know:3,known:2,kwarg:[2,3],last:3,latest:3,leak:2,leav:2,left:3,leftmost:3,level:3,limit:3,link:0,list:[0,2,3],list_app:3,listen:3,load:3,load_app_api:3,local:3,locat:3,locate_playbooks_in_directori:3,log:[2,3],loggabl:3,logger:3,login:3,logout:3,look:1,lookup:3,lpop:3,lpush:3,made:1,mai:3,main:3,make_cach:3,make_inst:3,mani:3,map:3,marshmallow:3,match:3,mean:[2,3],mechan:3,memori:[2,3],mesagecompon:0,messag:[0,1,2],message_compon:0,message_typ:0,messageact:3,messageactionev:3,messagecompon:0,messagehistori:3,messsag:3,metadata:3,method:[0,2,3],metric:3,millisecond:3,minor:1,mix:2,mixin:3,model:3,modif:3,modifi:3,modified_at:3,modul:[1,3],module_nam:3,more:3,multipl:[0,3],multiprocess:3,multiprocessedexecutor:3,must:3,name:[0,2,3],necessari:[2,3],need:3,never:3,new_case_nam:3,new_nam:3,new_permiss:3,new_resourc:3,new_rol:3,newli:3,next:[2,3],non:[2,3],none:[0,2,3],normal:0,note:[2,3],notif:3,notificationsseev:3,notimplementederror:3,number:[2,3],obj:[2,3],object:[0,2,3],occurr:3,old_nam:3,on_:2,on_action_execution_error:2,on_action_execution_success:2,on_action_start:2,on_app_act:2,on_app_instance_cr:2,on_arguments_invalid:2,on_branch_not_taken:2,on_branch_taken:2,on_condition_error:2,on_condition_success:2,on_conditional_expression_error:2,on_conditional_expression_fals:2,on_conditional_expression_tru:2,on_job_ad:2,on_job_error:2,on_job_execut:2,on_job_remov:2,on_scheduler_paus:2,on_scheduler_resum:2,on_scheduler_shutdown:2,on_scheduler_start:2,on_transform_error:2,on_transform_success:2,on_trigger_action_awaiting_data:2,on_trigger_action_not_taken:2,on_trigger_action_taken:2,on_walkoff_ev:2,on_workflow_abort:2,on_workflow_arguments_invalid:2,on_workflow_arguments_valid:2,on_workflow_execution_pend:2,on_workflow_execution_start:2,on_workflow_paus:2,on_workflow_resum:2,on_workflow_shutdown:2,one:[2,3],onli:[2,3],openapi:3,oper:3,opt:3,optim:3,option:[0,2,3],org:3,origin:[2,3],orm:[0,3],other:[2,3],otherwis:[2,3],our:1,out:3,output:3,over:[2,3],overridden:0,overwritten:3,packag:3,packet:3,page:1,parallel:3,param:[0,3],paramet:[0,2,3],pars:3,partial:3,particular:3,pass:[0,2,3],passs:3,password:3,password_attempt:3,patch:3,path:3,path_to_fil:3,paus:[2,3],pend:2,perform:[0,3],period:3,permiss:3,persist:2,plaintext:[0,3],plaintext_field:3,platform:1,playbook:3,playbookschema:3,pleas:1,pool:3,pop:3,posit:3,positionschema:3,possibl:2,present:3,presum:3,previou:3,previous:3,primari:[2,3],primarili:3,prioriti:3,problem:3,procedur:0,process:3,product:3,project:1,proto_help:3,protobuf:3,provid:[1,2,3],prune:3,prune_databas:3,prune_if_necessari:3,publish:3,pubsub:3,pubsub_cach:3,purpos:3,push:3,put:3,python:[1,3],qualifi:3,queri:3,rais:[2,3],read:3,readabl:3,reader:3,reason:3,reauthent:3,reauthor:0,receiv:3,record:3,record_user_act:3,recurs:3,redi:3,rediscacheadapt:3,refer:[1,2,3],reflect:3,regardless:2,regist:[2,3],register_app_act:2,register_callback:3,register_ev:2,registr:2,rel:1,relat:3,relationship:3,releas:1,relev:[],reload:3,remov:[2,3],remove_act:3,remove_skip_valu:3,remove_us:3,remove_workflow_by_nam:3,renam:3,rename_cas:3,rename_workflow:3,render:0,repositori:3,repres:3,represent:[0,3],requir:[0,2,3],requires_reauth:[0,3],requires_respons:3,resourc:3,respect:3,respond:3,respons:3,rest:3,result:3,resum:[2,3],retri:3,revok:3,revoke_token:3,rfc7807:3,rfc:3,right:3,rightmost:3,role:[0,3],role_id:3,role_nam:3,root:3,rout:2,router:2,row:3,rpop:3,rpush:3,rtype:0,run:3,runtim:3,safe:3,same:3,sanit:3,saved_workflow:3,savedworkflow:3,schedul:[2,3],scheduled_task_id:3,scheduledtask:3,scheduledworkflow:3,scheduler_ev:3,schedulerjobad:2,schedulerjoberror:2,schedulerjobexecut:2,schedulerjobremov:2,schedulerpaus:2,schedulerresum:2,schedulershutdown:2,schedulerstart:2,schema:3,scope:2,search:[1,3],second:3,see:3,select:3,self:[0,3],send:[0,2,3],send_messag:0,send_to_interfac:3,sender:[2,3],sender_id:[2,3],sender_uid:2,sendmessag:2,sent:3,serial:3,server:1,serverdb:3,session:3,set:[2,3],set_all_app_inst:3,set_argument_proto:3,set_execution_id:3,set_permiss:3,set_resourc:3,set_resources_for_rol:3,set_rol:3,setup_app_inst:3,shard:3,should:[0,2,3],shut:3,shutdown:[0,2,3],shutdown_inst:3,signal:[2,3],signal_nam:2,signatur:2,simpl:0,singl:3,singleton:2,site:1,socket:3,some:[0,2,3],sourc:[0,2,3],source_id:3,spawn_worker_process:3,special:3,specif:[2,3],specifi:[2,3],split:3,split_task_id:3,sqlalchemi:3,sqlite:3,sse:3,sseevent:3,ssestream:3,stabl:1,start:[1,2,3],start_argu:3,started_at:3,statement:3,statu:3,steam:3,step:3,stop:3,store:3,str:[0,2,3],stream:3,streamableblueprint:3,string:[2,3],strip:3,strong:2,structur:3,subchannel:3,subclass:[0,3],subject:[0,3],submodul:3,subscrib:3,subscript:3,subscription_json:3,subscriptioncach:3,success:[2,3],successfulli:3,sued:3,summari:3,support:3,synchron:3,tabl:3,tag:3,tag_nam:3,take:3,taken:[2,3],task:3,task_id:3,task_trigg:3,tear_down:3,teh:[0,3],test:3,text:0,thei:2,them:3,thi:[0,1,2,3],thing:3,thread:3,threadauthent:3,threadedauthent:3,through:3,throughout:3,thrown:2,time:3,timedelta:3,timelin:3,timeout:3,timestamp:3,titl:[0,3],token:3,token_id:3,took:3,tool:3,track:3,transact:3,transform:[2,3],transform_nam:3,transformerror:2,transformschema:3,transformsign:[2,3],transformsuccess:2,trigger:[2,3],trigger_arg:3,trigger_typ:3,triggeractionawaitingdata:2,triggeractionnottaken:2,triggeractiontaken:2,tupl:3,tutori:1,two:3,type:[0,2,3],type_:3,uid:3,unallow:2,under:3,unencrypt:3,uniqu:[2,3],unknown:2,unknownapp:[2,3],unknownappact:[2,3],unknowncondit:3,unknowndevic:3,unknowndevicefield:3,unknownev:2,unknownfunct:3,unknowntransform:3,unlik:2,unspecifi:3,unsubscrib:3,unsubscribe_messag:3,unsuccessfulli:3,until:1,unus:3,updat:3,update_from_json:3,update_subscript:3,update_value_refer:3,upon:3,uri:3,url:0,url_prefix:2,usag:1,use:[0,2,3],used:[0,2,3],user:[0,3],user_has_read:3,user_id:3,user_last_read_at:3,usernam:3,uses:3,using:3,utf:3,util:2,uuid4:3,uuid:3,uuidd:3,valid:[2,3],validate_app_act:2,validate_ev:2,validate_path:3,valu:3,valueerror:2,variabl:3,verifi:3,verify_password:3,version:3,view:3,wai:3,wait:3,walkfoffev:2,walkoff:2,walkoffev:[2,3],walkoffsign:[2,3],walkofftag:3,warn:2,weak:[2,3],weakset:2,well:[1,3],what:3,whatev:3,when:[0,2,3],where:3,whether:3,which:[0,2,3],who:3,whose:[2,3],with_cas:3,with_devic:3,with_ev:3,with_read_bi:3,with_rol:3,with_us:3,with_user_histori:3,without:3,worker:3,workercommunicationmessagedata:3,workercommunicationmessagetyp:3,workflow:[1,2],workflow_execution_id:3,workflow_id:3,workflow_nam:3,workflowabort:2,workflowargumentsinvalid:2,workflowargumentsvalid:2,workflowcommunicationmessagedata:3,workflowcommunicationmessagetyp:3,workflowexecutioncontrol:3,workflowexecutionpend:2,workflowexecutionstart:2,workflowmetr:3,workflowpaus:2,workflowresult:3,workflowresum:2,workflows_path:3,workflowschema:3,workflowshutdown:2,workflowsign:[2,3],workflowstatu:3,workflowstatusenum:3,wrap:[2,3],wrapper:3,yield:[2,3],you:1,zap:3,zmq:3},titles:["App Development","Welcome to Walkoff\u2019s documentation!","Interface Development","Walkoff Platform"],titleterms:{"case":3,api:[],app:[0,3],blueprint:3,databas:3,develop:[0,2],document:1,endpoint:3,execut:3,executor:3,gatewai:3,indic:1,interfac:2,intern:[],messag:3,modul:[],platform:3,refer:[],relev:[],server:3,stabil:1,tabl:1,version:1,walkoff:[1,3],welcom:1,workflow:3}})