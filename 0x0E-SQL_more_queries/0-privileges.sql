-- lists all privileges of the MySQL users user_0d_1 and user_0d_2
SELECT
    user,
    host,
    Select_priv,
    Insert_priv,
    Update_priv,
    Delete_priv,
    Create_priv,
    Drop_priv,
    Grant_priv,
    References_priv,
    Index_priv,
    Alter_priv,
    Create_tmp_table_priv,
    Lock_tables_priv,
    Create_view_priv,
    Show_view_priv,
    Create_routine_priv,
    Alter_routine_priv,
    Execute_priv,
    Event_priv,
    Trigger_priv
FROM
    mysql.user
WHERE
    user IN ('user_0d_1', 'user_0d_2') AND
    host = 'localhost';